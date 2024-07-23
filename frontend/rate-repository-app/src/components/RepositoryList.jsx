import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useState, useEffect } from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const RepositoryList = () => {
  const [repositories, setRepositories] = useState();

  const fetchRepositories = async () => {
    const response = await fetch('http://192.168.1.145:5001/api/repositories');
    const json = await response.json();
    console.log(json);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  // Get the nodes from the edges array
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
