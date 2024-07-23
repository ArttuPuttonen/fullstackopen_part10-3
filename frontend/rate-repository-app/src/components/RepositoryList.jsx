import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useState, useEffect } from 'react';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const RepositoryList = () => {
  const { repositories } = useRepositories();


  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];


  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
    data={repositoryNodes}
    ItemSeparatorComponent={ItemSeparator}
    renderItem={({ item }) => <RepositoryItem item={item} />}
    keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;
