const MiniCard = (props) => {
  return (
    <>
      <a href="#">
        <div class="folder">
          <h3 className="secondary-color">{props.title}</h3>
        </div>
      </a>
    </>
  );
};
export default MiniCard;
