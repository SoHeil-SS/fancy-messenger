(function () {
  function clickInsideElement(e, className) {
    var el = e.srcElement || e.target;

    if (el.classList.contains(className)) {
      return el;
    } else {
      while ((el = el.parentNode)) {
        if (el.classList && el.classList.contains(className)) {
          return el;
        }
      }
    }

    return false;
  }

  function getPosition(e) {
    var posX = 0;
    var posY = 0;

    if (!e) e = window.event;

    if (e.pageX || e.pageY) {
      posX = e.pageX;
      posY = e.pageY;
    } else if (e.clientX || e.clientY) {
      posX =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      posY =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }

    return {
      x: posX,
      y: posY,
    };
  }

  var contextMenuLinkClassName = "context-menu__link";
  var contextMenuActive = "context-menu--active";

  var taskItemClassName = "task";
  var taskItemInContext;

  var clickCoords;
  var clickCoordsX;
  var clickCoordsY;

  var menu = document.querySelector("#context-menu");
  var menuState = 0;
  var menuWidth;
  var menuHeight;

  var windowWidth;
  var windowHeight;

  function init() {
    contextListener();
    clickListener();
    keyupListener();
    resizeListener();
  }

  function contextListener() {
    document.addEventListener("contextmenu", function (e) {
      taskItemInContext = clickInsideElement(e, taskItemClassName);

      if (taskItemInContext) {
        e.preventDefault();
        console.log("on");
        toggleMenuOn();
        positionMenu(e);
      } else {
        console.log("off");
        taskItemInContext = null;
        toggleMenuOff();
      }
    });
  }

  /**
   * Listens for click events.
   */
  function clickListener() {
    document.addEventListener("click", function (e) {
      var clickElIsLink = clickInsideElement(e, contextMenuLinkClassName);

      if (clickElIsLink) {
        e.preventDefault();
        menuItemListener(clickElIsLink);
      } else {
        var button = e.which || e.button;
        if (button === 1) {
          toggleMenuOff();
        }
      }
    });
  }

  /**
   * Listens for keyup events.
   */
  function keyupListener() {
    window.onkeyup = function (e) {
      if (e.keyCode === 27) {
        toggleMenuOff();
      }
    };
  }

  /**
   * Window resize event listener
   */
  function resizeListener() {
    window.onresize = function (e) {
      toggleMenuOff();
    };
  }

  /**
   * Turns the custom context menu on.
   */
  function toggleMenuOn() {
    if (menuState !== 1) {
      menuState = 1;
      menu.classList.add(contextMenuActive);
    }
  }

  /**
   * Turns the custom context menu off.
   */
  function toggleMenuOff() {
    if (menuState !== 0) {
      menuState = 0;
      menu.classList.remove(contextMenuActive);
    }
  }

  function positionMenu(e) {
    clickCoords = getPosition(e);
    clickCoordsX = clickCoords.x;
    clickCoordsY = clickCoords.y;

    menuWidth = menu.offsetWidth + 4;
    menuHeight = menu.offsetHeight + 4;

    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    if (windowWidth - clickCoordsX < menuWidth) {
      menu.style.left = windowWidth - menuWidth + "px";
    } else {
      menu.style.left = clickCoordsX + "px";
    }

    if (windowHeight - clickCoordsY < menuHeight) {
      menu.style.top = windowHeight - menuHeight + "px";
    } else {
      menu.style.top = clickCoordsY + "px";
    }
  }

  function menuItemListener(link) {
    console.log(
      "Task ID - " +
        taskItemInContext.getAttribute("data-id") +
        ", Task action - " +
        link.getAttribute("data-action")
    );
    toggleMenuOff();
  }

  init();
})();
