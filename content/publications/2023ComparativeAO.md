---
date: '2023-11-23'
title: 'Comparative Analysis of Traditional and Contextual Embedding for Bangla Sarcasm Detection in Natural Language Processing'
type: 'Conference Paper'
conference: 'COMNETSAT'
doi: '10.1109/COMNETSAT59769.2023.10420673'
url: ''
github: ''
featured: false
show: true
authors:
  - name: 'Kaji Mehedi Hasan Fahim'
    affiliation: 'Brac University'
  - name: 'Mithila Moontaha'
    affiliation: 'Brac University'
  - name: 'Mashrur Rahman'
    affiliation: 'Brac University'
  - name: 'Ehsanur Rahman Rhythm'
    url: 'https://errhythm.me'
    affiliation: 'Brac University'
    email: 'errhythm.me@gmail.com'
  - name: 'Annajiat Alim Rasel'
    url: 'http://annajiat.googlepages.com'
    affiliation: 'Brac University'
    email: 'annajiat@gmail.com'
---

Sarcasm, a sort of sentiment characterized by a disparity between the apparent and intended meanings of the text, is a key component of sentiment analysis, opinion extraction, and social media analytics. However, sarcasm detection in Bangla has not received sufficient research attention yet. Moreover, there hasn’t been a significant amount of study done comparing traditional and contextual word embeddings for the Bengali language. This study aims to address this gap by comparing traditional embedding by using the Bidirectional Gated Recurrent Unit - BiGRU model and contextual embedding by using Bidirectional Encoder Representations from Transformers - BERT for sarcasm detection in Bangla. The collection of the dataset of Bangla text was from social media platforms, containing labelled instances - whether it provides sarcasm or non-sarcasm. Pre-trained word embeddings i.e. GloVe and FastText are used as traditional embedding for this study. By using metrics like precision, recall and F1-score, the performances for both models have been obtained. When the two traditional word embedding approaches are compared, GloVe embedding with Bi-GRU has outperformed FastText embedding with a macro-averaged F1 score of 0.9395. On the other hand, contextual word embedding using BERT has outperformed both the traditional approaches having a better macro-averaged F1 score of 0.9572 and greater class-wise performance as compared with traditional embedding for both non-sarcastic (96%) and sarcastic (96%) text detection. In our findings, contextual word embedding i.e. BERT has performed better as compared with the two traditional word embeddings for this specific Bangla sarcasm detection binary classification task.
