let app = document.getElementByld(typewriter);
let typewriter = new typewriter (app,{
    loop: true,
    delay: 75
});
typewriter
.pauseFor(2500)
.typeString(Estudiante de la Licenciatura en Administración y Gestión Empresarial.)
.pauseFor(200)
.deleteChars(10)
.start();