import animeImage from "../assets/jjk.jpeg";

const Header = () => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-">
          <h1 className="text-4xl font-bold">Hi, I'm David</h1>
          <p className="text-md font-light opacity-70">Thinker + Developer + Creative.</p>
        </div>
        <div>
          <img
            src={animeImage}
            alt="animeImage"
            className="w-12 h-12 sm:w-20 sm:h-20 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
