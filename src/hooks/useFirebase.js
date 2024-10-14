import { useState, useEffect } from 'react';
import { ref, onValue, increment, update, get } from 'firebase/database';
import { database } from '../config/firebase';
import { debounce } from 'lodash';

const generateUserId = () => Math.random().toString(36).substr(2, 9);

const getUserId = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    let storedUserId = localStorage.getItem('userId');
    if (!storedUserId) {
      storedUserId = generateUserId();
      localStorage.setItem('userId', storedUserId);
    }
    setUserId(storedUserId);
  }, []);

  return userId;
};

export const useViewCount = (contentType, slug, shouldIncrement = true) => {
  const [viewCount, setViewCount] = useState(0);
  const userId = getUserId();

  useEffect(() => {
    if (!userId) {
      return;
    }

    const viewsRef = ref(database, `${contentType}/${slug}/views`);

    onValue(viewsRef, snapshot => {
      const count = snapshot.val() || 0;
      setViewCount(count);
    });

    if (shouldIncrement) {
      const updateViewCount = debounce(() => {
        update(ref(database), {
          [`${contentType}/${slug}/views`]: increment(1),
        });
      }, 5000); // Update every 5 seconds at most

      updateViewCount();

      return () => {
        updateViewCount.cancel();
      };
    }
  }, [contentType, slug, userId, shouldIncrement]);

  return viewCount;
};

export const useLikeCount = (contentType, slug) => {
  const [likeCount, setLikeCount] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const userId = getUserId();

  useEffect(() => {
    if (!userId) {
      return;
    }

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
    if (!userId) {
      return;
    }

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
