import s from'./style.module.css';
import POKEMONS from '../../components/Pokemons/index';
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import bg2 from '../../assets/bg2.jpg';
import bg3 from '../../assets/bg3.jpg';
import PokemonCard from "../../components/PokemonCard";
import logoImg from '../../assets/logo.svg';
import MenuHeader from "../../components/MenuHeader";

const HomePage = ({ onChangePage }) => {
  const handleClickBtn = (page) => {
    onChangePage && onChangePage(page);
  }
  return (
    <div className="home">
      <MenuHeader />
      <Header title="Pokemon Game"
              descr="Something FASCINATING"
              onClickBtn={handleClickBtn}
      />
      <Layout id="rules"
              title="Rules"
              urlBg={bg2}/>
      <Layout title="Cards" colorBg="yellow">
        <div className={s.flex}>
          {
            POKEMONS.map((e) =>
              <PokemonCard key={e.id} type={e.type} name={e.name} img={e.img} id={e.id} values={e.values}/>)
          }
        </div>
      </Layout>
      <Layout title="YEP, you have to read this CLOSELY" urlBg={bg3}>
        <img src={logoImg} alt="logo"/>
        <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a
          3x3 grid.
          Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the
          player's own color of red or blue.
          To win, a majority of the total ten cards played (including the one card that is not placed on the board) must
          be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. </p>
      </Layout>
    </div>
  );
};

export default HomePage;
