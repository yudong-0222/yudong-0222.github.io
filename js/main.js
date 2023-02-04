window.addEventListener("DOMContentLoaded",()=>{REDEFINE.themeInfo={theme:"Redefine v"+REDEFINE.theme_config.version,author:"EvanNotFound",repository:"https://github.com/EvanNotFound/hexo-theme-redefine"},REDEFINE.localStorageKey="REDEFINE-THEME-STATUS",REDEFINE.styleStatus={isExpandPageWidth:!1,isDark:!1,fontSizeLevel:0,isOpenPageAside:!0},REDEFINE.printThemeInfo=()=>{console.log(`      ______ __  __  ______  __    __  ______                       \r
     /\\__  _/\\ \\_\\ \\/\\  ___\\/\\ "-./  \\/\\  ___\\                      \r
     \\/_/\\ \\\\ \\  __ \\ \\  __\\\\ \\ \\-./\\ \\ \\  __\\                      \r
        \\ \\_\\\\ \\_\\ \\_\\ \\_____\\ \\_\\ \\ \\_\\ \\_____\\                    \r
         \\/_/ \\/_/\\/_/\\/_____/\\/_/  \\/_/\\/_____/                    \r
                                                               \r
 ______  ______  _____   ______  ______ __  __   __  ______    \r
/\\  == \\/\\  ___\\/\\  __-./\\  ___\\/\\  ___/\\ \\/\\ "-.\\ \\/\\  ___\\   \r
\\ \\  __<\\ \\  __\\\\ \\ \\/\\ \\ \\  __\\\\ \\  __\\ \\ \\ \\ \\-.  \\ \\  __\\   \r
 \\ \\_\\ \\_\\ \\_____\\ \\____-\\ \\_____\\ \\_\\  \\ \\_\\ \\_\\\\"\\_\\ \\_____\\ \r
  \\/_/ /_/\\/_____/\\/____/ \\/_____/\\/_/   \\/_/\\/_/ \\/_/\\/_____/\r
                                                               \r
  Github: https://github.com/EvanNotFound/hexo-theme-redefine`)},REDEFINE.setStyleStatus=()=>{localStorage.setItem(REDEFINE.localStorageKey,JSON.stringify(REDEFINE.styleStatus))},REDEFINE.getStyleStatus=()=>{var _=localStorage.getItem(REDEFINE.localStorageKey);if(_){for(var E in _=JSON.parse(_),REDEFINE.styleStatus)REDEFINE.styleStatus[E]=_[E];return _}return null},REDEFINE.refresh=()=>{REDEFINE.initUtils(),REDEFINE.initMenuShrink(),REDEFINE.initModeToggle(),REDEFINE.initBackToTop(),!0===REDEFINE.theme_config.local_search.enable&&REDEFINE.initLocalSearch(),!0===REDEFINE.theme_config.code_block.copy&&REDEFINE.initCopyCode(),!0===REDEFINE.theme_config.lazyload.enable&&REDEFINE.initLazyLoad()},REDEFINE.printThemeInfo(),REDEFINE.refresh()});