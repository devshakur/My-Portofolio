

  console.log(sideNav);
function closeSideBar() {
  const [isOpen, setisOpen] = useState(false);
  if()

  bodyElement.addEventListener("click", (e) => {
    e.preventDefault();
    if (!sideNav.classList.contains("hidden")) {
      sideNav.classList.add("hidden");
    }
    // !checking ? sideNav.classList.add("hidden") : null;
  });
}
closeSideBar();

// change color upon onclick
function changeColor() {
  const Element = document.querySelectorAll(".list");
  Element.forEach((elem) => {
    elem.addEventListener("click", () => {
      elem.style.color = "white";
    });
  });
}



  // const [isOpen, setIsOpen] = useState(false);
  // const navContent = useRef(null);
  // const navContainer = useRef(null);
  // useEffect(() => {
  //   if (navContent) {
  //     document.addEventListener("click", (e) => {
  //       e.preventDefault();
  //       if (navContainer.current.style.visibility === "visible") {
  //         console.log("clicked");
  //         navContainer.current.style.visibility === "hidden";
  //       }
  //     });
  //   }
  // }, []);

  //   const [isOpen, setIsOpen] = useState(false);
  // const navContent = useRef(null);
  // const navContainer = useRef(null);

  // const openSideNav = () => {
  //   setIsOpen(!isOpen);
  // };

  // useEffect(() => {
  //   const handleClick = (e) => {
  //     if (navContainer.current.contains(e.target)) {
  //       return;
  //     }

  //     if (isOpen) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener("click", handleClick);

  //   return () => {
  //     document.removeEventListener("click", handleClick);
  //   };
  // }, [isOpen]);

  // useEffect(() => {
  //   if (isOpen) {
  //     navContainer.current.style.visibility = "visible";
  //   } else {
  //     navContainer.current.style.visibility = "hidden";
  //   }
  // }, [isOpen]);




  const closeSideBar = () => {
    const bodyElem = window.document;
    // const sideNav = useRef(null);
    const sideNav = document.querySelector(".nav");
    bodyElem.addEventListener("click", (e) => {
      if (sideNav) {
        sideNav.classList.add("hidden");
      } else {
        null;
      }
    });
  };
  closeSideBar();