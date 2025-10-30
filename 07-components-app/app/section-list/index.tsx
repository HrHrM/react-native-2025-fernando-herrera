import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { houses } from '@/store/section-list-materials';
import { SectionList } from 'react-native';



const SectionListScreen = () => {
  return (
    <ThemedView margin>
      <ThemedCard>
        <SectionList
          sections={houses}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ThemedText>{item}</ThemedText>}
          ListHeaderComponent={() => (
            <ThemedText type="h1" className="font-bold mb-3">
              Personajes
            </ThemedText>
          )}
          renderSectionHeader={({ section }) => (
            <ThemedText
              type="h1"
              className="bg-light-background dark:bg-dark-background p-2 rounded"
            >
              {section.title}
            </ThemedText>
          )}
          stickySectionHeadersEnabled
          ListFooterComponent={() => (
            <ThemedText
              type="h1"
              className="font-bold bg-light-background dark:bg-dark-background p-2 mb-10 rounded"
            >
              Secciones: {houses.length}
            </ThemedText>
          )}
          showsVerticalScrollIndicator={false}
        />
      </ThemedCard>
    </ThemedView>
  );
};

export default SectionListScreen;
