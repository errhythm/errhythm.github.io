import { useState, useEffect } from 'react';
import { ref, onValue, increment, update, get } from 'firebase/database';
import { database } from '../config/firebase';
import { debounce } from 'lodash';

const getUserId = () => {
  let userId = localStorage.getItem('userId');
  if (!userId) {
    userId = Math.random().toString(36).substr(2, 9);
    localStorage.setItem('userId', userId);
  }
  return userId;
};

export const useViewCount = (contentType, slug) => {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const viewsRef = ref(database, `${contentType}/${slug}/views`);

    onValue(viewsRef, snapshot => {
      const count = snapshot.val() || 0;
      setViewCount(count);
    });

    const updateViewCount = debounce(() => {
      update(ref(database), {
        [`${contentType}/${slug}/views`]: increment(1),
      });
    }, 10000); // Update every 10 seconds at most

    updateViewCount();

    return () => {
      updateViewCount.cancel();
    };
  }, [contentType, slug]);

  return viewCount;
};

export const useLikeCount = (contentType, slug) => {
  const [likeCount, setLikeCount] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const userId = getUserId();

  useEffect(() => {
    const likesRef = ref(database, `${contentType}/${slug}/likes`);
    const userLikeRef = ref(database, `users/${userId}/likes/${contentType}/${slug}`);

    onValue(likesRef, snapshot => {
      const count = snapshot.val() || 0;
      setLikeCount(count);
    });

    onValue(userLikeRef, snapshot => {
      setUserLiked(snapshot.val() || false);
    });
  }, [contentType, slug, userId]);

  const handleLike = async () => {
    const userLikeRef = ref(database, `users/${userId}/likes/${contentType}/${slug}`);

    const userLikedSnapshot = await get(userLikeRef);
    const currentUserLiked = userLikedSnapshot.val() || false;

    const updates = {};
    updates[`${contentType}/${slug}/likes`] = increment(currentUserLiked ? -1 : 1);
    updates[`users/${userId}/likes/${contentType}/${slug}`] = !currentUserLiked;

    await update(ref(database), updates);
    setUserLiked(!currentUserLiked);
  };

  return { likeCount, userLiked, handleLike };
};
