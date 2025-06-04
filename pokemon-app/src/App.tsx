import './App.css';
import axios from 'axios'
import { useState,useEffect,createContext } from 'react';

function App() {
  const initialUrl="https://pokeapi.co/api/v2/pokemon"
  //最後の数字を変えてあげると個体の情報が取得できる https://pokeapi.co/api/v2/pokemon/1

  //名前とURLをstateで管理
  const[pokemons,setPokemons]=useState([])

  //個別のデータをstateで管理
  const[pokemonData,setPokemonData]=useState([])

  const testArray:any=[]
  //名前データを取得する処理
  useEffect(()=>{
    const getPokemon=async()=>{
      const pokemonName=await axios.get(initialUrl)
      setPokemons(pokemonName.data.results)
    }
    getPokemon();
  },[])
  
  //個別のデータを取得する処理
  useEffect(()=>{
    pokemons.forEach(pokemon => {
      const getData=async()=>{
        const pokemonData=await axios.get(pokemon.url)
        testArray.push(pokemonData)
        console.log(testArray)
      }
      getData()
    });
  },[pokemons])

  //ボタンを押したときの処理を追加 20項目の切り替え

  return (
    <div className="App">
      <ul>
        <li></li>
        {/* 20項目を表示する */}
        {/* 前へボタン */}
        <button>前へ</button>
        {/* 次へボタン */}
        <button>次へ</button>
      </ul>
    </div>
  );
}

export default App;
