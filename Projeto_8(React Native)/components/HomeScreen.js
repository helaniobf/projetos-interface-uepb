import React from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';

import Heading from './Heading';
import WoofCard from './WoofCard';
import WoofPost from './WoofPost';
import { woofs, posts } from './data';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Heading text="Trending Woofs" />

      <FlatList
        data={woofs}
        keyExtractor={(woof) => woof.id.toString()}
        renderItem={({ item }) => (
          <WoofCard name={item.name} avatar={item.avatar} />
        )}
        horizontal
        contentContainerStyle={styles.horizontalContainer}
      />

      <ScrollView>
        {posts.map((post) => (
          <WoofPost
            key={post.id}
            image={post.image}
            title={post.title}
            description={post.description}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 29,
  },
  horizontalContainer: {
    paddingLeft: 1,
  },
});

export default HomeScreen;
