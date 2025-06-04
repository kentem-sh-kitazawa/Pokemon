import './App.css';
import axios from 'axios'
import { useState,useEffect } from 'react';

function App() {
  const initialUrl="https://pokeapi.co/api/v2/pokemon"
  //最後の数字を変えてあげると個体の情報が取得できる https://pokeapi.co/api/v2/pokemon/1

  //データをstateで管理
  const[pokemons,setPokemons]=useState()

  //名前データを取得する処理
  useEffect(()=>{
    const getPokemon=async()=>{
      const pokemonTest=await axios.get(initialUrl)
      setPokemons(pokemonTest.data.results)
    }
    getPokemon();
  },[])

  //ボタンを押したときの処理を追加 20項目の切り替え

  return (
    <div className="App">
      <ul>
        <li></li>
        {/* 20項目を表示する */}
        {/* 前へボタン */}
        {/* 次へボタン */}
      </ul>
    </div>
  );
}

export default App;
