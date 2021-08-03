function NewLetter(props) {
  var num = Math.floor(Math.random() * props.letters.length);
  var lett = props.letters[num];
  props.arrayOfLetters.push(lett);
  alert("ok");
  return <p className="letters">{props.arrayOfLetters}</p>;
}

export default NewLetter;
