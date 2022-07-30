import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Video from 'react-native-video';
import SwipeRender from 'react-native-swipe-render';

const Post = () => {
  return (
    <View style={styles.videoContainer}>
      <SwipeRender
        index={0}
        loop={true}
        autoplay={false}
        loadMinimal={true}
        loadMinimalSize={0}
        horizontal={false}
        data={[
          {
            uri: 'https://rr2---sn-5hne6nzk.googlevideo.com/videoplayback?expire=1658616731&ei=OyfcYrTZB9qEgAeHlZTICA&ip=103.139.48.39&id=o-ANX8eCfHniwo0fYAb0STw5t_4pqNOzeGOYZxM2FYTxO-&itag=18&source=youtube&requiressl=yes&mh=We&mm=31%2C29&mn=sn-5hne6nzk%2Csn-5hnekn7z&ms=au%2Crdu&mv=m&mvi=2&pl=24&pcm2=yes&initcwndbps=695000&vprv=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=15.069&lmt=1657890300242744&mt=1658594706&fvip=5&fexp=24001373%2C24007246&c=ANDROID&txp=5430434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cpcm2%2Cvprv%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAOR7CB826WriWW0B_x2pNa0aj_hyav1rjoA9H-qU-Rg9AiEAo1FDOU459DeCmE2V07swIdBv5KCui-INdowTojZRbm0%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAIAD0HRy01dQ30GmCVIQY1rTSmW2aRXoPHR6B02joQGgAiEA-SGTiCFvPHFA4UCpexj_G8o742RgmIP0xkQkTT53-4k%3D',
          },
          {
            uri: 'https://rr6---sn-5go7ynez.googlevideo.com/videoplayback?expire=1658616812&ei=jCfcYtHdF4umgQeopY6gAQ&ip=45.192.136.0&id=o-ANgldqiJVSvQUmKyd91C8kjde2LCrlcy6vV14UfNyyqb&itag=18&source=youtube&requiressl=yes&mh=gY&mm=31%2C29&mn=sn-5go7ynez%2Csn-5goeen7d&ms=au%2Crdu&mv=m&mvi=6&pl=26&initcwndbps=693750&vprv=1&mime=video%2Fmp4&gir=yes&clen=1152190&ratebypass=yes&dur=15.082&lmt=1658572609087925&mt=1658594706&fvip=3&fexp=24001373%2C24007246&c=ANDROID&txp=6310224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgQajsDAsUkMgvigSQD8uSVMu9Mnnb3NHdS2_-bATq9wICIDZWq7eKPw23LRiCsvj0dheIjoEvi667SBIITHI-o9nw&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhANyL4rHiA3PMHXiObqKU6Q7RmLWp3j2bbaOkFZhuwOx0AiByBmHPTV_bEKclUyVwE2_J3qkcLfwuNbuOhJVJ2YwYlQ%3D%3D',
          },
          {
            uri: 'https://rr3---sn-5hneknes.googlevideo.com/videoplayback?expire=1658618282&ei=Si3cYviwBc-4-gax25OoBg&ip=45.128.244.132&id=o-AM_dsEpnvLjzLWWqeyWYaL9A6NlThVEH9LYzmC4XUp98&itag=18&source=youtube&requiressl=yes&mh=zE&mm=31%2C26&mn=sn-5hneknes%2Csn-4g5e6nss&ms=au%2Conr&mv=u&mvi=3&pl=24&vprv=1&mime=video%2Fmp4&gir=yes&clen=1119717&ratebypass=yes&dur=15.061&lmt=1658582641684337&mt=1658595558&fvip=5&fexp=24001373%2C24007246&c=ANDROID&rbqsm=fr&txp=6310224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAO1MZ8_NfOqM_zegmyoWebk3dimjQAk1wp9_XSGReSg-AiAVtJz-vaTZqzD5BS-zTW0EjwSLtmUCQjo3auHyOlilkg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgLkgQe8ccyo17_aHpe6sdxDT_kyWG1fi4VEyYerY5m1YCIFwYKl2zMQjWg8aJRYz89eGQ-GgrH0g0YZ7MKByVuSkl',
          },
          {
            uri: 'https://static.videezy.com/system/resources/previews/000/033/878/original/baby32.mp4',
          },
          {
            uri: 'https://status-video.com/my_content/uploads/2022/05/Types-Of-Game-Funny-Video.mp4',
          },
          {
            uri: 'https://www.statuslagao.com/whatsapp/videos/funny/funny-status-video-0193.mp4',
          },
          {
            uri: 'https://status-video.com/my_content/uploads/2022/05/Type-Of-People-On-Beach-Funny-Video.mp4',
          },
          {
            uri: 'https://status-video.com/my_content/uploads/2022/05/Papa-Ki-Pari-Funny-Status-Video.mp4',
          },
        ]}
        renderItem={({item, index}) => (
          <>
            <View>
              <Video
                source={{uri: item.uri}}
                resizeMode="cover"
                repeat
                style={styles.backgroundVideo}
              />
            </View>
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    zIndex: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  videoContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Post;
