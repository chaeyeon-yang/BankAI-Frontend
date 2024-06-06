import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const HeaderBar = ({ text }) => {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="w-full h-48 py-7 relative bg-white mb-15">
      <ArrowBackIosIcon
        className="absolute left-0"
        onClick={handleBackClick}
      ></ArrowBackIosIcon>
      <p className="text-15 text-center">{text}</p>
    </div>
  );
};

export default HeaderBar;
