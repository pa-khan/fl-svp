<template>
  <div class="preview" :class="bg ? '--bg' : null">
    <Container class="--sm">
      <div class="preview__video" :class="isPlay ? classPlay : null">
        <div class="preview__video-inner">
          <div class="preview__play" @click="togglePlay">
            <div class="preview__play-icon">
              <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.7852 8.90199C19.7852 10.0567 19.7852 12.9434 17.7852 14.0981L4.60658 21.7068C2.60658 22.8615 0.106582 21.4181 0.106582 19.1087L0.106582 3.89141C0.106582 1.58201 2.60658 0.138641 4.60658 1.29334L17.7852 8.90199Z"
                  fill="#282D49" />
              </svg>
            </div>
            <div class="preview__play-title">Смотреть</div>
          </div>
          <div class="preview__video-bg">
            <img :src="poster" alt="">
          </div>
          <div class="preview__video-box">
            <iframe ref="iframe" width="560" height="315" src="https://www.youtube.com/embed/iWg7gtGHlbo"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>
        </div>
        <div class="preview__video-title">{{ videoTitle }}</div>

      </div>
      <div class="preview__info">
        <div class="preview__title">{{ title }}</div>
        <div class="preview__text">{{ text }}</div>
      </div>
    </Container>
  </div>
</template>
<script src="./Preview.js"></script>
<style src='./Preview.scss' lang="scss">
</style>
