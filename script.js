window.onload = function () {
    document.getElementById("descrip").value = "Aquí se enlistan las diferentes etapas de las plantas, selecciona el texto de los campos a la izquierda para cambiar de etapa. \n\nObtenido de: https://eos.com/es/blog/etapas-de-crecimiento-de-una-planta/";
    var texto = "";
    var imagen = "";
    cajas = document.getElementsByName("caja");
    //EVENTO onselect
    cajas[0].onselect = function () {
        texto = "A pesar de tratarse de procesos biológicos distintos, la germinación, la brotación y el desarrollo de las yemas se agrupan en la misma fase primaria de crecimiento de la planta. Dependiendo del tipo de cultivo, esta etapa puede durar desde unos pocos días hasta unas pocas semanas. En este punto de desarrollo, la semilla ha germinado y producido lo que se denominan “hojas de semilla”, que se distinguen fácilmente de las hojas maduras.\n\nFundamentalmente, la fase de germinación y brotación requiere unos niveles adecuados de temperatura y oxígeno. Además, agota las reservas nutricionales de las plantas, lo que puede conducir a una deficiencia de nutrientes sin fertilización adicional. A menudo es necesario un estado de latencia previo.\n\nEn la etapa de crecimiento 0, el cultivo necesita agua constantemente para poner en marcha un metabolismo sano. En algunos casos, el riego también es necesario para eliminar inhibidores de la germinación de la semilla (especialmente en el caso de las plantas anuales de desierto).";
        imagen = "./images/etapa0.webp";
        document.getElementById("descrip").value = texto;
        document.getElementById("imagen").src = imagen;
        document.getElementById("etapa").innerHTML = "Germinación";
    }
    cajas[1].onselect = function () {
        texto = "El poder para realizar la fotosíntesis de la hoja es la base sobre la que vive una planta. Por lo tanto, la etapa 1 del crecimiento de la planta es esencial para el desarrollo normal del cultivo. Todos los nutrientes de la planta en esta etapa de crecimiento le ayudarán en las siguientes etapas de su desarrollo. Por lo tanto, la fertilización es esencial.\n\nEn la etapa 1 de crecimiento, la planta produce hojas “genuinas”, que son copias en miniatura de las hojas completamente desarrolladas. El desarrollo de las hojas se rige por un programa fundamental universal, que varía un poco para adaptarse a las necesidades de cada especie y a las condiciones ambientales. Las hojas se desarrollan en estructuras planas de diversos tamaños y formas, comenzando en los meristemos apicales del brote o yemas terminales. Las hormonas de las plantas, así como los reguladores transcripcionales y las cualidades mecánicas del tejido, intervienen en el control de este proceso.";
        imagen = "./images/etapa1.jpg";
        document.getElementById("descrip").value = texto;
        document.getElementById("imagen").src = imagen;
        document.getElementById("etapa").innerHTML = "Desarrollo De Las Hojas";
    }
    cajas[2].onselect = function () {
        texto = "El macollamiento (o ahijamiento) es la etapa de crecimiento de la planta en la que se forman nuevos brotes. En lugar de extenderse como los rizomas y los estolones, crecen verticalmente. El resultado es un aumento considerable del número de nuevos brotes que se producen inmediatamente al lado del brote inicial. Se denomina “plantas hijas” a los nuevos brotes que se desarrollan a partir de la “planta madre”.\n\nEl macollamiento también puede significar el desarrollo de brotes laterales. Cada nuevo brote está formado por un punto de crecimiento central que con el tiempo se convierte en un tallo articulado definido por nudos y entrenudos similares a una caña de bambú dentro de esta etapa.";
        imagen = "./images/etapa2.webp";
        document.getElementById("descrip").value = texto;
        document.getElementById("imagen").src = imagen;
        document.getElementById("etapa").innerHTML = "Formación De Brotes Laterales";
    }
    cajas[3].onselect = function () {
        texto = "Algunas partes de la planta, como los tallos y las raíces, siguen creciendo durante toda la vida de la planta: este proceso se denomina crecimiento indeterminado. Se producen nuevas células en las puntas de los brotes en crecimiento. El crecimiento en los tallos se produce en muchos sitios diferentes, a diferencia del sistema radicular, donde apenas son unos pocos. La duración y la intensidad de estos cambios varían entre especies, pero los cultivos dentro de una misma especie tienden a cumplir algunas normas. El calentamiento provocado por el cambio global afecta significativamente a esta etapa de crecimiento de la planta, debido a la correlación directa entre la temperatura y el alargamiento del tallo.";
        imagen = "./images/etapa3.webp";
        document.getElementById("descrip").value = texto;
        document.getElementById("imagen").src = imagen;
        document.getElementById("etapa").innerHTML = "Crecimiento Longitudinal Del Tallo";
    }
    cajas[4].onselect = function () {
        texto = "El desarrollo de tallos fuertes y abundantes hojas verdes caracteriza la etapa vegetativa del crecimiento de la planta. Estos procesos son fundamentales, porque la fotosíntesis depende de una superficie foliar lo suficientemente grande para absorber la luz. En particular, un desarrollo sano de las hojas suele ir seguido de un fuerte crecimiento de las raíces.\n\nLos fertilizantes nitrogenados son especialmente beneficiosos en esta fase del crecimiento de la planta, ya que fomentan el crecimiento vigoroso de tallos y hojas durante la fase vegetativa. Además, en el caso de las gramíneas, en la fase de crecimiento vegetativo tardío, los agricultores ya pueden aplicar estrategias de gestión de los pastos, como el pastoreo, una vez que la planta ha desarrollado suficientes hojas para la fotosíntesis y raíces para su fijación, el almacenamiento y la ingesta de minerales.";
        imagen = "./images/etapa4.webp";
        document.getElementById("descrip").value = texto;
        document.getElementById("imagen").src = imagen;
        document.getElementById("etapa").innerHTML = "Partes Vegetativas Cosechables";
    }
    cajas[5].onselect = function () {
        texto = "La emergencia de la inflorescencia es el proceso por el cual un racimo de flores se dispone a lo largo de un eje floral. La nascencia se refiere al proceso por el cual una cabeza de semilla emerge de la vaina formada por la hoja bandera. El hecho de que sea el inicio de las fases de crecimiento reproductivo es el factor unificador que agrupa estos dos procesos biológicos diferentes en una sola fase del desarrollo de la planta.\n\nEn la etapa 5 de crecimiento, el objetivo principal de la planta pasa de la expansión vegetativa al desarrollo de estructuras reproductivas, como las flores y, después, los frutos. El fósforo, que puede suministrarse mediante fertilizantes, es especialmente crítico en este punto del desarrollo de la planta.";
        imagen = "./images/etapa5.jpg";
        document.getElementById("descrip").value = texto;
        document.getElementById("imagen").src = imagen;
        document.getElementById("etapa").innerHTML = "Espigamiento";
    }
    cajas[6].onselect = function () {
        texto = "Durante la etapa 6 de crecimiento de las plantas, las que tienen flores crean las estructuras reproductivas necesarias para la reproducción sexual. Las anuales sólo viven un año, y su floración y posterior desaparición coinciden. En las bienales, el primer año pasa la fase vegetativa y el segundo se dedica a florecer y morir. La mayoría de las plantas perennes seguirán floreciendo todos los años si las condiciones lo permiten. El potasio es un nutriente vital para las plantas durante esta etapa de desarrollo, ya que favorece la floración y la fructificación y mejora la salud general del cultivo. Además, la floración es una de las fases críticas del crecimiento de los cultivos en lo relativo al riego.\n\nLa llegada de la giberelina (una hormona vegetal), una temperatura adecuada y la duración del día y la noche (fotoperiodo) son los desencadenantes más comunes de la floración en muchas plantas. Sin un periodo de frío invernal, se retrasa esta etapa de crecimiento de la planta de muchas plantas anuales (como el trigo de invierno) y bienales. La vernalización describe la transformación que resulta de este periodo prolongado de temperaturas gélidas.";
        imagen = "./images/etapa6.webp";
        document.getElementById("descrip").value = texto;
        document.getElementById("imagen").src = imagen;
        document.getElementById("etapa").innerHTML = "Floración";
    }
    cajas[7].onselect = function () {
        texto = "La biología vegetal y la horticultura se han centrado mucho en la etapa de crecimiento de la planta en la que se desarrollan los frutos. En la mayoría de las plantas con flores, el desarrollo del fruto se produce en el ovario tras la fecundación. Un ovario maduro se denomina “fruto” por sus cualidades comestibles. El fruto es un refugio seguro para el embrión en crecimiento y sus semillas, ya que los encierra.\n\nEl desarrollo del fruto carnoso de la planta se divide generalmente en cuatro fases:\n\nEn la primera fase, conocida como desarrollo floral, se establecen la identidad, el número y la forma de los órganos florales.\n\nCon la fecundación se inicia la segunda fase, la división celular.\n\nEn la tercera fase, las células experimentan una rápida expansión y endorreduplicación hasta que comienza la maduración.\n\nEl sabor, la textura, los componentes nutricionales y el aspecto de la fruta se determinan durante la etapa de maduración, la cuarta fase que se inicia tras detenerse el crecimiento de la fruta.\n\nEn esta etapa de crecimiento de la planta, pueden seguir desarrollándose sin necesidad de nitrógeno. Ahora es el momento de suministrar fosfato y potasio a las plantas para favorecer la maduración y aumentar el rendimiento de la cosecha.";
        imagen = "./images/etapa7.webp";
        document.getElementById("descrip").value = texto;
        document.getElementById("imagen").src = imagen;
        document.getElementById("etapa").innerHTML = "Desarrollo Del Fruto";
    }
    cajas[8].onselect = function () {
        texto = "En esta etapa de crecimiento de la planta, los frutos suelen responder a una señal de la maduración: un aumento de la producción de etileno. La infección por bacterias u hongos, así como la recolección de la fruta, pueden estimular la producción de etileno, indicando dicho proceso. En cuanto la fruta recibe esta señal, experimenta una serie de cambios que conducen a su maduración.\n\nDicho de otro modo, se fabrican nuevas enzimas. Enzimas como la amilasa y la pectinasa ayudan a digerir el almidón y la pectina, respectivamente, y las hidrolasas ayudan a descomponer los compuestos del interior de las frutas. El etileno activa los genes responsables de la transcripción y traducción de estas enzimas. Las enzimas catalizan reacciones que modifican las propiedades de la fruta: color, textura, sabor y aroma.";
        imagen = "./images/etapa8.webp";
        document.getElementById("descrip").value = texto;
        document.getElementById("imagen").src = imagen;
        document.getElementById("etapa").innerHTML = "Maduración De Frutos Y Semillas";
    }
    cajas[9].onselect = function () {
        texto = "Hay signos reveladores de la senescencia: alteraciones degenerativas en las células, comúnmente relacionadas con un aumento de los productos de desecho y un cambio en el metabolismo. La senescencia de las plantas está regulada por numerosos factores ambientales, entre los que destacan el fotoperiodo y la temperatura. Sin embargo, algunos tratamientos hormonales pueden ralentizar esta etapa de crecimiento de la planta en las de crecimiento anual.\n\nEn las plantas perennes, la caída de las hojas indica el inicio del letargo invernal. Hacia el final de la temporada de crecimiento, los días más cortos y las temperaturas más frías desencadenan la senescencia de las hojas en muchos árboles. La clorofila verde desaparece y los pigmentos carotenoides amarillos y anaranjados se hacen más visibles. La duración del día puede gobernar la senescencia de las hojas en los árboles caducifolios mediante su efecto sobre el metabolismo hormonal.\n\nPese a esta breve descripción de las diez etapas de crecimiento de la planta por parte del BBCH, esto puede parecer excesiva para algunos agricultores que ya tienen sus manos ocupadas gestionando el resto de aspectos de su industria agrícola. Sin embargo, la introducción de la escala BBCH se debe a nuestra mayor comprensión de la producción de cultivos y al reconocimiento de que los resultados de la gestión agrícola dependen en gran medida de la etapa de crecimiento del cultivo durante la cual se aplican.";
        imagen = "./images/etapa9.png";
        document.getElementById("descrip").value = texto;
        document.getElementById("imagen").src = imagen;
        document.getElementById("etapa").innerHTML = "Senescencia, Comienzo De La Dormancia";
    }

}
