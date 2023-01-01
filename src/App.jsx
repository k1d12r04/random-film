import { useState } from 'react';
import './App.css';

function App() {
  const [films, setFilms] = useState([
    'Yıldızlararası',
    'Başlangıç',
    '12 Kızgın Adam',
    'Piyanist',
    'Prestij',
    'Akıl oyunları',
    'The Imitation Game',
    'Truman Show',
    'Dingin Savaşçı',
    'Boyun Eğmez',
    'Matrix',
    'Batman üçlemesi',
    'Yüzüklerin Efendisi',
    'Harry Potter',
    'The Revenant ( diriliş )',
    'Nefes: Vatan sağolsun',
    'Yarının Sınırında',
    'V-for vendetta',
    'Ayla',
    'Rüzgarı dizginleyen çocuk',
    'Yeni hayat',
    'Suretler',
    'Lucy',
    'Kan Kardeşler',
    'Kaynak',
    'Aman Tanrım',
    'Kader',
    'Yalnız Kahraman',
    'Özgürlük Yazarları',
    'The Macinist',
    'Altıncı His',
    'Olağan Şüpheliler',
    'Yeniden Diriliş ',
    'Apostle of Christ',
    'Black Swan',
    'Uzaydan Gelen Fırtına',
    'Kaykaycı Kız',
    'Hayat Güzeldir',
    "Hz. Süleyman'ın Krallığı",
    'Venom',
    '5. Dalga',
    'Fatîma',
    'Memento',
    'I Am Mother',
    'Togo',
    'Hıçkırık',
    'Kafatası Adası',
    'Kaptan Fantastik',
    'Tanrılar ve İnsanlar',
    'Oldboy',
    'Sherlock',
    'Black Mirror',
  ]);

  // useEffect(() => {
  //   localStorage.setItem('films', JSON.stringify(films));
  // }, [films]);

  // useEffect(() => {
  //   const films = JSON.parse(localStorage.getItem('films'));
  //   if (films) {
  //     setFilms(films);
  //   }
  // }, []);

  const [selectedFilm, setSelectedFilm] = useState('');

  const [enteredFilm, setEnteredFilm] = useState('');

  const selectFilmHandler = () => {
    const randomNumber = parseInt(Math.random() * films.length);
    setSelectedFilm(films[randomNumber]);
  };

  const inputChangeHandler = e => {
    setEnteredFilm(e.target.value);
  };

  const addFilmHandler = () => {
    setEnteredFilm('');
    setFilms(prevFilms => {
      const updatedFilmList = [enteredFilm, ...prevFilms];
      return updatedFilmList;
    });
  };

  return (
    <div className="container">
      <div className="film-wrapper">
        <h2 className="title">Filmler / Diziler</h2>

        <div className="films">
          {films.map((film, index) => (
            <p key={index}>
              {' '}
              {index + 1}: {film}{' '}
            </p>
          ))}
        </div>
      </div>

      <div className="selected">
        <button onClick={selectFilmHandler}>Rastgele film/dizi seç</button>
        <p className="selected__title">&#8595; Seçilen film / dizi &#8595;</p>

        <div className="box">
          {selectedFilm === '' ? (
            <p>Lütfen rastgele film / dizi seç butonuna basınız!</p>
          ) : (
            <p> &#10003; {selectedFilm} </p>
          )}
        </div>

        <div>
          <input
            value={enteredFilm}
            onChange={inputChangeHandler}
            type="text"
          />
          <button onClick={addFilmHandler}>Film / Dizi ekle</button>
        </div>
      </div>
    </div>
  );
}

export default App;
