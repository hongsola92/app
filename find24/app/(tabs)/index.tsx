import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Find24</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">{'\n'}🔍 바쁘다바빠 현대사회</ThemedText>
        <ThemedText>
          {'\n'}'언제 어디서나, 24시간 오픈 가게 찾기' {'\n'}
          바쁜 현대사회에서 시간에 구애받지 않고 원하는 서비스를 받을 수 있도록 설계되었습니다. 주간은 물론, 심야에도 이용 가능한 카페, 식당, 편의점 등을 신속하게 찾아드립니다.{'\n'}
          {'\n'}
          당신의 소중한 시간을 절약하고, 더 이상 가게가 닫혀 있어 발길을 돌려야 하는 불편함을 겪지 않도록 도와드리겠습니다♡{'\n'}
          <ThemedText type="defaultSemiBold">
          </ThemedText>{' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        {/* <ThemedText type="subtitle">Step 2: Explore</ThemedText> */}
        {/* <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView> */}
      {/* <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText> */}
        {/* <ThemedText> */}
          {/* When you're ready, run{' '} */}
          {/* <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>. */}
        {/* </ThemedText> */}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
