function NavigationDots({ active }) {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "contact"].map((item, index) => (
        <a
          key={item + index}
          href={`#${item}`}
          className="app__navigation-dot"
          onClick={() => setToggle(false)}
          // style={active && {backgroundColor:"#313BAC"}}
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  );
}

export default NavigationDots;
