// On passe l'objet {props} et on récupère ses propriétés sous la forme : props.propriété
function EmojiCard({ props }) {
  console.log(props);
  return (
    <div className="emojiContent">
        <span>{props.title}</span>
        <span>{props.symbol}</span>
    </div>
  );
}
export default EmojiCard;
