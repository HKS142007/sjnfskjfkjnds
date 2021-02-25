// add a loading progress bar. not required, but good ux
var loadingStatus = PCEJSUtil.loadingStatus(
  document.querySelector('.pcejs-loading-status')
);

window.macplus = PCEJSMacplus({
  arguments: ['-c', 'pce-config.cfg', '-r'],
  autoloadFiles: [
    'https://unpkg.com/pcejs-macplus@0.1.7/macplus-pcex.rom',
    'https://jamesfriend.com.au/pce-js/codepen/mac-plus.rom',
    'https://jamesfriend.com.au/pce-js/codepen/hd1.qed',
    'https://jamesfriend.com.au/pce-js/codepen/pce-config.cfg',
  ],
  locateFile(path, scriptDirectory) {
    return "https://unpkg.com/pcejs-macplus@0.1.7/" + path;
  },
  print: console.log.bind(console),
  printErr: console.warn.bind(console),
  canvas: document.querySelector('.pcejs-canvas'),
  monitorRunDependencies: function(remainingDependencies) {
    loadingStatus.update(remainingDependencies);
  },
});