import { style } from '@ThemeConfig';
import ToDoCard from '@/ui/components/card/card';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={style().base.content}>
      <ToDoCard />
    </SafeAreaView>
  );
}
