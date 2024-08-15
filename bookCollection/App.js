import React, { useState, useEffect } from "react";
import { FlatList, TextInput, View } from "react-native";

const App = () => {
  const [books, setBooks] = useState([]);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch("http://localhost:3000/books");
    const data = await response.json();
    setBooks(data);
  };

  const addBook = async () => {
    const response = await fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newBook }),
    });
    fetchBooks();
    setAuthor("");
    setTitle("");
    setYear("");
    setGenre("");
  };
  return (
    <View style={styles.container}>
      
      <Text>Book collection manager.</Text>
      <TextInput
        placeholder="Title"
        value="{title}"
        onChangeText={setTitle}
        style={styles.input}
      />
       <TextInput
        placeholder="Author"
        value="{author}"
        onChangeText={setAuthor}
        style={styles.input}
      />
       <TextInput
        placeholder="Genre"
        value="{genre}"
        onChangeText={setGenre}
        style={styles.input}
      />
       <TextInput
        placeholder="Year"
        value="{year}"
        onChangeText={setYear}
        style={styles.input}
      />
      <Button title="Add book" onPress={addBook} />
      <FlatList data={books} keyExtractor={(item) => item.id} renderItem={({ item }) => <Text>{item.title}by {item.author} by {item.year} by {item.genre}</Text>
      
    } />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    margin: 10,
    width: "80%",
  },
});

