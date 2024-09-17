import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SubTitle from './components/SubTitle/SubTitle'
import Title from './components/Title/Title'
import Item from './components/Item/Item'
import item1 from './assets/item1.svg'
import item2 from './assets/item2.svg'
import item3 from './assets/item3.svg'
import lojared from './assets/lojared.svg'
import lojagreen from './assets/lojagreen.svg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Title title="CLIENTE +" />
    <SubTitle subtitle="promo" color="red"/>
    <div>
      <Item imagem={item1} nome="Item 1" preco="000.000" cor="red" imagemIcone={lojared}></Item>
      <Item imagem={item2} nome="Item 2" preco="000.000" cor="red" imagemIcone={lojared}></Item>
      <Item imagem={item3} nome="Item 3" preco="000.000" cor="red" imagemIcone={lojared}></Item>
    </div>

    <Title title="OUTROS" />
    <SubTitle subtitle="saudável" color="green"/>
    <div>
      <Item imagem={item1} nome="Item 1" preco="000.000" cor="green" imagemIcone={lojagreen}></Item>
      <Item imagem={item2} nome="Item 2" preco="000.000" cor="green" imagemIcone={lojagreen}></Item>
      <Item imagem={item3} nome="Item 3" preco="000.000" cor="green" imagemIcone={lojagreen}></Item>
    </div>

  </StrictMode>,
)
