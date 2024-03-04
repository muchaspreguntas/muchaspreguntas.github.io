// **Javascript de Preguntor**//
//Se definen unas constantes para el proyecto, temas y preguntas//
//Luego se crean las funciones como capitalizeFirstLetter y nexquestion//
//Las funciones del menu, header y footer//
//Tambien las funcion de compartir pregutas//

//Costantes de proyecto: Comienzo //
  // Definición de temas disponibles
  // const porque seria valores constantes que no cambian
  // Dentro de const y como son una lista se usan corchetes []
  const themes = ["economia", "pareja", "ciencia", "psicologia", "religion", "politica", "desarrollo", "filosofia", "tecnologia", "historia", "vivencias", "miedos", "amor", "educacion", "negocios", "etica", "sexo"];

  // Definición de preguntas por tema
  // Cosnt porque las preguntas no cambian de valor
  const questions = {
    //Aqui las preguntas de economia
      economia: [
        "1. ¿Cómo crees que la automatización y la inteligencia artificial afectarán el mercado laboral en los próximos años?",
        "2. Desde tu perspectiva, ¿cuál es el papel de la educación financiera en la toma de decisiones económicas personales?",
        "3. ¿Qué medidas propondrías para fomentar la inclusión financiera en comunidades con bajos recursos?",
        "4. ¿Cuál es tu visión sobre el papel del gobierno en la regulación económica?",
        "5. En tu opinión, ¿cómo pueden las empresas contribuir de manera más efectiva al desarrollo sostenible?",
        "6. ¿Qué medidas propones para abordar la brecha salarial de género en el ámbito laboral?",
        "7. ¿Cómo influye la educación en la movilidad económica de las personas?",
        "8. ¿Cuáles son los desafíos económicos específicos que enfrenta tu comunidad?",
        "9. ¿Qué importancia le das al comercio justo y cómo puede impactar positivamente en la economía global?",
        "10. ¿Cómo crees que la tecnología está remodelando el panorama económico y laboral?",
        "11. Desde tu perspectiva, ¿cuál es el equilibrio adecuado entre la propiedad privada y la intervención gubernamental en la economía?",
        "12. ¿Cómo la crisis económica global reciente ha cambiado tu percepción sobre la estabilidad financiera?",
        "13. ¿Cuál es tu opinión sobre la renta básica universal como una solución para abordar la pobreza?",
        "14. ¿Crees que la economía debería priorizar el crecimiento económico o la sostenibilidad ambiental?",
        "15. ¿Cuál es tu visión sobre la deuda pública y cómo afecta al desarrollo económico a largo plazo?",
        "16. ¿Cómo pueden las políticas fiscales y monetarias impactar positivamente en el empleo?",
        "17. ¿Qué opinas sobre las criptomonedas y su potencial para transformar el sistema financiero tradicional?",
        "18. ¿Cómo pueden las pequeñas empresas contribuir al desarrollo económico local?",
        "19. ¿Crees que la globalización económica ha beneficiado a todas las naciones por igual?",
        "20. ¿Cuál es tu perspectiva sobre la relación entre la salud económica y el bienestar social?",
      ],
      //Preguntas de
      pareja: [
        "1. Más allá de las cualidades superficiales, ¿cuáles son los valores fundamentales que buscas en una pareja?",
        "2. ¿Cómo crees que las diferencias en la gestión de conflictos pueden fortalecer una relación?",
        "3. ¿Cómo defines el éxito en una relación a largo plazo?",
        "4. ¿Cómo crees que la comunicación afecta la salud de una relación?",
        "5. Desde tu perspectiva, ¿cuál es el papel del perdón en una relación duradera?",
        "6. ¿Cómo manejas las expectativas en una relación y qué importancia les das?",
        "7. ¿Cuáles son los desafíos más comunes que enfrentan las parejas en la actualidad?",
        "8. ¿Cuál es tu opinión sobre la independencia versus la interdependencia en una relación?",
        "9. Desde tu experiencia, ¿cómo la confianza se construye y se mantiene en una relación?",
        "10. ¿Qué importancia le das a la igualdad de roles en una relación?",
        "11. ¿Cómo enfrentas los cambios y las transiciones en una relación a largo plazo?",
        "12. ¿Cómo manejas los momentos difíciles y los desacuerdos en una relación?",
        "13. ¿Qué piensas sobre la necesidad de tiempo personal en una relación comprometida?",
        "14. ¿Cuál es tu opinión sobre las relaciones a larga distancia y cómo crees que pueden funcionar?",
        "15. Desde tu experiencia, ¿cómo afecta el estrés externo a la dinámica de pareja?",
        "16. ¿Cuál es tu visión sobre el equilibrio entre la individualidad y la vida en pareja?",
        "17. ¿Cómo manejas las diferencias culturales o de valores en una relación amorosa?",
        "18. ¿Cuáles son tus metas individuales y cómo las integras en una relación de pareja?",
        "19. ¿Cómo influye la empatía en la construcción de una conexión emocional profunda?",
        "20. ¿Cuál es tu enfoque para mantener la intimidad y la conexión emocional en una relación a largo plazo?",
      ],
      ciencia: [
        "1. ¿Cómo crees que la exploración espacial contribuye al avance de la humanidad?",
        "2. Desde tu perspectiva, considerando los problemas sociales contemporáneos como la desigualdad, la pobreza y la discriminación, ¿de qué manera la ciencia puede ofrecer soluciones concretas y generar un impacto positivo en la sociedad?",
        "3. ¿Cuál es el impacto ético de la investigación científica y tecnológica en la sociedad?",
        "4. ¿Qué importancia le das a la divulgación científica en la educación pública?",
        "5. Desde tu experiencia, ¿cómo la ciencia ha influido en tu comprensión del mundo?",
        "6. ¿Cuál es tu opinión sobre la ingeniería genética y su aplicación en la medicina?",
        "7. ¿Cómo la ciencia puede contribuir a la conservación del medio ambiente?",
        "8. ¿Cuál es tu área científica favorita y por qué te fascina?",
        "9. ¿Cómo crees que la ciencia y la tecnología han cambiado la medicina en las últimas décadas?",
        "10. Desde tu perspectiva, ¿cuál es el papel de la ética en la investigación científica?",
        "11. ¿Cómo la ciencia puede abordar los desafíos relacionados con el cambio climático?",
        "12. ¿Cuál es tu opinión sobre la inteligencia artificial y su impacto en la sociedad?",
        "13. ¿Cómo la ciencia ha influido en el desarrollo de la tecnología que usamos a diario?",
        "14. ¿Cuál es tu posición sobre la experimentación animal en la investigación científica?",
        "15. ¿Cómo la ciencia puede contribuir a la comprensión y tratamiento de enfermedades mentales?",
        "16. ¿Cuál es tu opinión sobre la colaboración internacional en proyectos científicos?",
        "17. Desde tu perspectiva, ¿cómo se puede fomentar el interés en la ciencia entre las nuevas generaciones?",
        "18. ¿Cómo crees que la inteligencia artificial puede influir en la evolución humana?",
        "19. ¿Cuál es tu visión sobre la relación entre ciencia y espiritualidad?",
        "20. ¿Cómo la ciencia puede abordar la desinformación y la falta de alfabetización científica?"
      ],
      psicologia: [
        "1. ¿Cómo incorporas prácticas para gestionar el estrés en tu rutina diaria con el objetivo de promover la salud mental?",
        "2. ¿Cuál es tu enfoque filosófico para mantener un equilibrio emocional en situaciones desafiantes?",
        "3. ¿Cómo podemos promover una mayor conciencia y comprensión de la salud mental en la sociedad?",
        "4. Desde tu perspectiva, ¿cómo influyen las experiencias de la infancia en la salud mental en la edad adulta?",
        "5. ¿Cuál es tu opinión sobre la terapia psicológica y su impacto en el bienestar emocional?",
        "6. ¿Cómo abordas la autoevaluación y el crecimiento personal en tu vida diaria?",
        "7. ¿Cuál es tu visión sobre la relación entre la espiritualidad y la salud mental?",
        "8. ¿Cómo la práctica de la atención plena puede contribuir al bienestar psicológico?",
        "9. ¿Cuáles son tus estrategias para fomentar la resiliencia emocional en situaciones difíciles?",
        "10. Desde tu perspectiva, ¿cómo se pueden reducir el estigma y los prejuicios en torno a las enfermedades mentales?",
        "11. ¿Cómo influyen las relaciones interpersonales en la salud mental y el bienestar emocional?",
        "12. ¿Cuál es tu opinión sobre el impacto de la tecnología en la salud mental de las personas?",
        "13. ¿Cómo la expresión creativa puede ser una herramienta para la gestión emocional?",
        "14. ¿Qué importancia le das a la autorreflexión en el mantenimiento de la salud mental?",
        "15. ¿Cómo abordas los desafíos emocionales en tus relaciones personales y profesionales?",
        "16. Desde tu experiencia, ¿cómo se puede mejorar el acceso a servicios de salud mental a nivel comunitario?",
        "17. ¿Cuál es tu perspectiva sobre el equilibrio entre el trabajo y la salud mental en la sociedad actual?",
        "18. ¿Cómo crees que la educación en salud mental puede impactar positivamente en las comunidades?",
        "19. Desde tu perspectiva, ¿cómo se pueden fomentar entornos laborales saludables desde el punto de vista psicológico?",
        "20. ¿Cuál es tu opinión sobre la relación entre la creatividad y la salud mental?"
      ],
      religion: [
        "1. ¿Cómo influye tu religión en tus decisiones y acciones diarias?",
        "2. ¿Qué piensas sobre la espiritualidad en un mundo cada vez menos religioso?",
        "3. ¿Cómo abordas las diferencias religiosas al construir relaciones significativas?",
        "4. Desde tu punto de vista, ¿cuál es la relación entre la moralidad y la religión?",
        "5. ¿Cómo la práctica religiosa puede afectar la percepción del propósito y significado en la vida?",
        "6. ¿Cuál es tu opinión sobre la coexistencia pacífica entre personas con diferentes creencias religiosas?",
        "7. ¿Cómo manejas las dudas o cuestionamientos dentro de tu propia fe?",
        "8. Desde tu perspectiva, ¿cómo la religión puede contribuir a la construcción de comunidades solidarias?",
        "9. ¿Qué importancia le das a la oración o meditación en tu práctica religiosa?",
        "10. ¿Cómo la religión puede proporcionar consuelo y apoyo durante momentos de crisis personal?",
        "11. ¿Cuál es tu opinión sobre la relación entre la ciencia y la religión?",
        "12. ¿Cómo la religión puede influir en las decisiones éticas y morales en la vida cotidiana?",
        "13. ¿Cómo las festividades religiosas contribuyen a la cohesión social en tu comunidad?",
        "14. ¿Cuál es tu perspectiva sobre el papel de las mujeres en las instituciones religiosas?",
        "15. Desde tu experiencia, ¿cómo la religión ha influido en tu sentido de identidad y pertenencia?",
        "16. ¿Cómo abordas la diversidad de interpretaciones dentro de tu propia tradición religiosa?",
        "17. ¿Cuál es tu visión sobre el papel de las religiones en la promoción de la paz mundial?",
        "18. ¿Cómo crees que la espiritualidad puede contribuir al bienestar emocional y mental?",
        "19. ¿Cuál es tu perspectiva sobre la relación entre la religión y la justicia social?",
        "20. Desde tu punto de vista, ¿cómo la religión puede abordar los desafíos éticos de la sociedad contemporánea?"
      ],
      politica: [
        "1. ¿Cómo crees que la política puede ser una herramienta efectiva para el cambio positivo?",
        "2. Desde tu perspectiva, ¿cuáles son los mayores desafíos políticos que enfrenta tu país?",
        "3. ¿Qué papel juegan los ciudadanos comunes en la formación y mejora de sistemas políticos?",
        "4. ¿Cuál es tu opinión sobre la participación de la juventud en la política y la toma de decisiones?",
        "5. Desde tu experiencia, ¿cómo se pueden abordar las divisiones políticas y fomentar la unidad?",
        "6. ¿Cuál es tu perspectiva sobre la ética en la toma de decisiones políticas?",
        "7. ¿Cómo la política local puede impactar directamente en la calidad de vida de las comunidades?",
        "8. Desde tu punto de vista, ¿cuál es el papel de la tecnología en la participación política?",
        "9. ¿Cómo influyen las ideologías políticas en la formación de tus valores personales?",
        "10. ¿Cuál es tu visión sobre la relación entre la política y la justicia social?",
        "11. ¿Cómo la política puede abordar los problemas medioambientales a nivel global?",
        "12. ¿Cuál es tu opinión sobre el sistema electoral de tu país?",
        "13. Desde tu perspectiva, ¿cómo se pueden equilibrar los intereses individuales y colectivos en la política?",
        "14. ¿Cómo afectan las decisiones políticas en la distribución de recursos y oportunidades?",
        "15. ¿Cuál es tu enfoque para mantener un diálogo respetuoso sobre temas políticos con personas de opiniones diferentes?",
        "16. ¿Qué importancia le das a la transparencia y la rendición de cuentas en la política?",
        "17. Desde tu experiencia, ¿cómo se pueden abordar los desafíos de la corrupción en la política?",
        "18. ¿Cuál es tu perspectiva sobre la participación de las minorías en la política?",
        "19. ¿Cómo la política puede influir en la educación y el acceso a oportunidades para todos?",
        "20. ¿Qué cambios propondrías para mejorar la participación ciudadana en la toma de decisiones políticas?",
      ],
      desarrollo: [
        "1. En tu búsqueda de desarrollo personal, ¿puedes compartir un ejemplo específico de cómo defines y persigues un crecimiento significativo en tu vida?",
        "2. ¿Cuáles son los principales obstáculos que enfrentas al trabajar hacia tus metas a largo plazo?",
        "3. ¿Has experimentado crecimiento personal al ser auténtico? ¿Puedes compartir un ejemplo?",
        "4. ¿Cuál es tu enfoque para superar los momentos de estancamiento en tu desarrollo personal?",
        "5. ¿Cómo la autoevaluación constante contribuye a tu proceso de desarrollo?",
        "6. Desde tu perspectiva, ¿cómo influye la educación continua en el desarrollo personal?",
        "7. ¿Qué importancia le das a la adaptabilidad y la flexibilidad en tu búsqueda de desarrollo?",
        "8. ¿Cómo la construcción de relaciones significativas impacta en tu crecimiento personal?",
        "9. ¿Cuáles son tus estrategias para mantener un equilibrio entre el desarrollo profesional y personal?",
        "10. Desde tu punto de vista, ¿cómo la resiliencia juega un papel crucial en el desarrollo?",
        "11. ¿Cuál es tu visión sobre el concepto de éxito en el contexto del desarrollo personal?",
        "12. ¿Cómo influyen las experiencias de fracaso en tu enfoque hacia el desarrollo?",
        "13. ¿Cuál es tu perspectiva sobre la importancia del desarrollo emocional en la vida cotidiana?",
        "14. Desde tu experiencia, ¿cómo se pueden superar los miedos y las dudas en el camino del desarrollo?",
        "15. ¿Qué aprendizajes significativos has obtenido de tus mayores desafíos en el desarrollo personal?",
        "16. ¿Cómo la automotivación y la disciplina contribuyen al progreso en el desarrollo personal?",
        "17. ¿Cuál es tu opinión sobre la relación entre el desarrollo personal y la contribución a la sociedad?",
        "18. ¿Cómo la creatividad y la innovación pueden impulsar el desarrollo personal?",
        "19. ¿Cuáles son tus metas a largo plazo en tu viaje de desarrollo personal?",
        "20. ¿Qué consejos darías a alguien que busca iniciar su propio camino de desarrollo personal?"
      ],
      filosofia: [
        "1. ¿Cuál es tu filosofía fundamental sobre la vida y el significado personal?",
        "2. Desde tu perspectiva, ¿cómo puede uno alcanzar una verdadera felicidad y satisfacción?",
        "3. ¿Cómo influye tu visión filosófica en tus decisiones y acciones diarias?",
        "4. ¿Cuál es tu opinión sobre la conexión entre la filosofía y la ética?",
        "5. Desde tu punto de vista, ¿cuál es el papel de la espiritualidad en tu filosofía de vida?",
        "6. ¿Cómo abordas las contradicciones y los dilemas éticos desde tu perspectiva filosófica?",
        "7. ¿Cuál es tu visión sobre la relación entre la libertad individual y la responsabilidad colectiva?",
        "8. Desde tu experiencia, ¿cómo la filosofía puede proporcionar guía en situaciones difíciles?",
        "9. ¿Qué importancia le das a la autenticidad y la coherencia en tu filosofía de vida?",
        "10. ¿Cómo la reflexión filosófica puede enriquecer las relaciones interpersonales?",
        "11. ¿Cuál es tu posición sobre la relación entre la razón y la intuición en la toma de decisiones?",
        "12. Desde tu perspectiva filosófica, ¿cómo defines el concepto de justicia?",
        "13. ¿Cuál es tu enfoque para reconciliar las diferencias filosóficas en discusiones y debates?",
        "14. ¿Cómo la filosofía puede ayudar a las personas a encontrar sentido en situaciones de adversidad?",
        "15. ¿Cuál es tu opinión sobre la relación entre la filosofía y la creatividad?",
        "16. Desde tu experiencia, ¿cómo la filosofía ha influido en tus valores morales?",
        "17. ¿Cómo abordas la búsqueda de significado y propósito en la existencia desde una perspectiva filosófica?",
        "18. ¿Cuál es tu posición sobre la relación entre la filosofía y la ciencia?",
        "19. ¿Cómo la filosofía puede contribuir al bienestar emocional y mental de las personas?",
        "20. ¿Qué consejos darías a alguien interesado en explorar y desarrollar su propia filosofía de vida?"
      ],
      tecnologia: [
        "1. ¿Cómo crees que la tecnología puede ser utilizada de manera ética para mejorar la calidad de vida?",
        "2. Desde tu experiencia, ¿cuáles son los beneficios y desafíos de depender de la tecnología en la vida diaria?",
        "3. ¿Cómo podemos equilibrar el avance tecnológico con la preservación de valores humanos fundamentales?",
        "4. ¿Cuál es tu opinión sobre la influencia de la inteligencia artificial en la toma de decisiones éticas?",
        "5. Desde tu perspectiva, ¿cómo la tecnología puede impactar positivamente la educación?",
        "6. ¿Cuál es tu visión sobre la privacidad en la era digital y cómo debería abordarse?",
        "7. ¿Cómo crees que la tecnología puede contribuir a resolver desafíos globales como el cambio climático?",
        "8. Desde tu experiencia, ¿cuál es el papel de la tecnología en la conectividad y las relaciones interpersonales?",
        "9. ¿Qué medidas éticas propondrías para el desarrollo y uso de la realidad virtual?",
        "10. ¿Cuál es tu perspectiva sobre la influencia de las redes sociales en la sociedad actual?",
        "11. ¿Cómo la tecnología ha afectado la forma en que consumes y compartes información?",
        "12. Desde tu punto de vista, ¿cómo puede la tecnología ser una herramienta para la inclusión social?",
        "13. ¿Cuál es tu opinión sobre la ética de la ingeniería genética y la modificación del ADN humano?",
        "14. ¿Cómo la tecnología puede desempeñar un papel en la resolución de problemas de salud a nivel mundial?",
        "15. Desde tu experiencia, ¿cómo la tecnología ha influido en la creatividad y la expresión artística?",
        "16. ¿Cuál es tu posición sobre el equilibrio entre la seguridad nacional y la privacidad individual en la era digital?",
        "17. ¿Cómo crees que la inteligencia artificial podría transformar el ámbito laboral en el futuro?",
        "18. ¿Cuál es tu visión sobre la sostenibilidad en el desarrollo y producción de tecnología?",
        "19. Desde tu perspectiva, ¿cómo la tecnología puede influir en la toma de decisiones políticas?",
        "20. ¿Qué medidas sugerirías para abordar la brecha digital y garantizar el acceso equitativo a la tecnología?",
      ],
      historia: [
        "1. ¿Cómo influye tu comprensión de la historia en tu perspectiva actual del mundo?",
        "2. Desde tu punto de vista, ¿cómo la historia puede servir como guía para decisiones futuras?",
        "3. ¿Cuál es el impacto duradero de eventos históricos en la configuración de sociedades contemporáneas?",
        "4. ¿Cuál es tu período histórico favorito y por qué te fascina?",
        "5. Desde tu perspectiva, ¿cómo la historia puede ayudarnos a comprender y abordar los desafíos actuales?",
        "6. ¿Qué lecciones importantes crees que podemos aprender de los errores del pasado?",
        "7. ¿Cómo la historia puede influir en la identidad cultural y la diversidad?",
        "8. ¿Cuál es tu opinión sobre la preservación del patrimonio histórico y cultural?",
        "9. ¿Cómo las narrativas históricas pueden ser interpretadas de manera diferente según la perspectiva cultural?",
        "10. Desde tu experiencia, ¿cómo la historia ha influido en tu percepción de la justicia y la equidad?",
        "11. ¿Cuál es tu visión sobre el papel de los museos y sitios históricos en la educación pública?",
        "12. ¿Cómo la historia puede contribuir a la construcción de una identidad nacional?",
        "13. ¿Qué eventos históricos crees que deberían recibir más atención en la educación formal?",
        "14. Desde tu perspectiva, ¿cómo la historia puede inspirar la innovación y el progreso?",
        "15. ¿Cuál es tu opinión sobre la representación histórica en medios de comunicación y entretenimiento?",
        "16. ¿Cómo la historia puede arrojar luz sobre cuestiones éticas y morales en la sociedad contemporánea?",
        "17. ¿Cuál es tu enfoque para enseñar a las generaciones futuras sobre la importancia de la historia?",
        "18. Desde tu experiencia, ¿cómo la historia ha impactado tu identidad personal y tu sentido de pertenencia?",
        "19. ¿Qué aspectos de la historia mundial te gustaría explorar más a fondo?",
        "20. ¿Cuál es tu percepción sobre la relación entre la historia y la evolución de la tecnología?",
      ],
      vivencias: [
        "1. ¿Cuál fue un momento decisivo en tu vida que cambió la forma en que te percibes a ti mismo?",
        "2. ¿Puedes compartir una experiencia que haya desafiado tus creencias fundamentales?",
        "3. ¿Cómo has superado un obstáculo significativo y qué aprendizajes obtuviste de esa experiencia?",
        "4. ¿Hay una persona que haya tenido un impacto profundo en tu vida? ¿Cómo?",
        "5. ¿Cuál es la lección más valiosa que has aprendido de una experiencia fallida?",
        "6. ¿Cuál es tu recuerdo más preciado de la infancia y por qué es significativo para ti?",
        "7. ¿Puedes describir un momento en el que hayas experimentado un crecimiento personal significativo?",
        "8. ¿Cómo manejas el equilibrio entre desafíos laborales y personales en tu vida?",
        "9. ¿Qué valor o principio es fundamental para ti y cómo guía tus decisiones?",
        "10. ¿Hay alguna historia de tu pasado que siempre quisiste compartir pero que no has tenido la oportunidad?",
        "11. ¿Cómo ha influido la cultura en tu identidad y perspectiva del mundo?",
        "12. ¿Cuál es el logro del que te sientes más orgulloso y cómo influyó en tu desarrollo?",
        "13. ¿Cómo manejas el estrés y las presiones en tu vida cotidiana?",
        "14. ¿Cuál es el libro que más ha impactado en tu vida y por qué?",
        "15. ¿Qué consejo te darías a ti mismo si pudieras retroceder en el tiempo?",
        "16. ¿Hay alguna tradición familiar que te haya dejado una impresión duradera?",
        "17. ¿Cómo influyen tus valores personales en tus relaciones y decisiones profesionales?",
        "18. ¿Has experimentado una transformación personal importante y cuál fue su origen?",
        "19. ¿Cómo te defines a ti mismo en términos de tus pasiones y aspiraciones?",
        "20. ¿Qué significa para ti tener una vida significativa y satisfactoria?"    
      ],
      miedos: [
        "1. ¿Cómo manejas los miedos que surgen en situaciones de cambio o incertidumbre?",
        "2. Desde tu perspectiva, ¿cómo influye la autoconciencia en la identificación y superación de los miedos?",
        "3. ¿Qué estrategias utilizas para afrontar miedos que pueden surgir en el ámbito profesional?",
        "4. ¿Cómo identificas y reconoces tus miedos personales?",
        "5. ¿Crees que la exposición gradual a los miedos puede ayudar a superarlos?",
        "6. ¿Cómo influyen los miedos en la toma de decisiones importantes en tu vida?",
        "7. ¿Cuál es tu enfoque para ayudar a otros a superar sus miedos?",
        "8. ¿Cómo los miedos pueden ser una fuente de motivación o limitación en tu vida?",
        "9. ¿Hay algún miedo que hayas superado y que haya tenido un impacto significativo en tu crecimiento personal?",
        "10. ¿Cómo manejas los miedos irracionales que pueden surgir en situaciones cotidianas?",
        "11. ¿Qué consejos tienes para aquellos que luchan contra miedos similares a los tuyos?",
        "12. ¿Cómo influyen los miedos en tus relaciones personales y profesionales?",
        "13. ¿Crees que los miedos pueden cambiar con el tiempo y la experiencia?",
        "14. ¿Cuál es tu perspectiva sobre la relación entre la valentía y la gestión de los miedos?",
        "15. ¿Cómo afecta el reconocimiento de tus miedos a tu autoestima y confianza?",
        "16. ¿Crees que compartir tus miedos con otros puede fortalecer las conexiones interpersonales?",
        "17. ¿Cuál es tu enfoque para ayudar a los demás a superar miedos profundamente arraigados?",
        "18. ¿Qué papel juega la aceptación en la gestión de los miedos?",
        "19. ¿Cómo los miedos pueden afectar tus metas y aspiraciones a largo plazo?",
        "20. ¿Cuál es tu consejo para enfrentar miedos desconocidos o situaciones nuevas?"
      ],
      amor: [
        "1. ¿Cómo influyen tus experiencias familiares en tu percepción del amor?",
        "2. Desde tu perspectiva, ¿cómo el amor contribuye al crecimiento personal y la autoaceptación?",
        "3. ¿Qué importancia le das a la compatibilidad en una relación amorosa?",
        "4. ¿Cómo ha evolucionado tu concepto de amor a lo largo del tiempo?",
        "5. Desde tu perspectiva, ¿cómo influye el amor en la toma de decisiones importantes en tu vida?",
        "6. ¿Qué lecciones has aprendido de relaciones pasadas en términos de amor y compatibilidad?",
        "7. ¿Cómo afecta el amor a tu bienestar emocional y mental?",
        "8. ¿Cuál es tu opinión sobre las diferentes formas de expresar y recibir amor?",
        "9. ¿Cómo manejas los desafíos y conflictos en una relación amorosa?",
        "10. ¿Cuál es tu visión sobre el equilibrio entre el amor propio y el amor hacia los demás?",
        "11. ¿Piensas que hay una persona perfecta para ti ('alma gemela') o crees que el amor se construye con el tiempo?",
        "12. ¿Cómo influye la cultura y la sociedad en tu comprensión del amor?",
        "13. ¿Cuál es tu enfoque para mantener viva la chispa del amor en una relación a largo plazo?",
        "14. ¿Cómo el amor puede ser una fuente de inspiración y motivación en tu vida?",
        "15. ¿Qué importancia le das a la comunicación en una relación amorosa exitosa?",
        "16. ¿Cómo influyen las experiencias familiares en la búsqueda del amor?",
        "17. ¿Cuál es tu opinión sobre la compatibilidad en una relación amorosa?",
        "18. ¿Cómo el amor puede contribuir al crecimiento personal y la autoaceptación?",
        "19. ¿Cuál es tu consejo para aquellos que buscan un amor duradero y significativo?",
        "20. ¿Cómo crees que el amor puede impactar en la sociedad en general?"
      ],    
      negocios: [
        "1. ¿Cómo defines el éxito empresarial y qué medidas tomas para alcanzarlo?",
        "2. Desde tu perspectiva, ¿cuál es la importancia de la innovación en el mundo de los negocios?",
        "3. ¿Cómo manejas la toma de decisiones éticas en tu empresa?",
        "4. ¿Cuál es tu opinión sobre la responsabilidad social corporativa y cómo la integras en tu negocio?",
        "5. Desde tu experiencia, ¿cómo la cultura organizacional impacta en el rendimiento de una empresa?",
        "6. ¿Cuál es tu enfoque para fomentar la diversidad e inclusión en el lugar de trabajo?",
        "7. ¿Cómo abordas la gestión del cambio en un entorno empresarial?",
        "8. ¿Cuál es tu visión sobre el equilibrio entre la automatización y la preservación de empleos?",
        "9. ¿Cómo defines y fomentas la colaboración efectiva entre los equipos en tu organización?",
        "10. Desde tu perspectiva, ¿cuál es el papel de la ética en la toma de decisiones empresariales?",
        "11. ¿Cómo manejas la competencia en el mercado y qué estrategias empleas para destacar?",
        "12. ¿Cuál es tu enfoque para construir y mantener relaciones sólidas con los clientes?",
        "13. ¿Cómo influye la transformación digital en tu estrategia empresarial?",
        "14. Desde tu experiencia, ¿cómo se pueden equilibrar los objetivos financieros y sociales en una empresa?",
        "15. ¿Cuál es tu opinión sobre la sostenibilidad en el ámbito empresarial?",
        "16. ¿Cómo enfrentas los momentos de crisis empresarial y qué aprendizajes obtienes?",
        "17. ¿Cuál es tu perspectiva sobre la relación entre la cultura empresarial y la agilidad organizativa?",
        "18. Desde tu punto de vista, ¿cómo se puede fomentar la creatividad y la innovación en equipos?",
        "19. ¿Cómo abordas la toma de riesgos en la toma de decisiones empresariales?",
        "20. ¿Cuál es tu estrategia para atraer y retener talento en tu empresa?",
        '21. ¿De qué manera Preguntor podría revolucionar la publicidad, permitiendo a las empresas conectar de forma innovadora y emocional con su audiencia? Más información: <a href="https://preguntor.github.io/" target="_blank">Preguntor - Generando Publicidad Humana</a>',

      ],
      educacion: [
        "1. ¿Cómo defines la calidad educativa y qué medidas tomas para mejorarla?",
        "2. ¿Desde tu perspectiva, cuál es el papel de la tecnología en la educación del siglo XXI?",
        "3. ¿Cómo abordas la equidad y la inclusión en el entorno educativo?",
        "4. ¿Cuál es tu opinión sobre la evaluación del rendimiento escolar y cómo puede mejorarse?",
        "5. ¿Desde tu experiencia, cómo la educación puede adaptarse a diferentes estilos de aprendizaje?",
        "6. ¿Cuál es tu enfoque para fomentar la creatividad y la innovación en el aula?",
        "7. ¿Cómo manejas los desafíos de la enseñanza a distancia y la educación virtual?",
        "8. ¿Cuál es tu visión sobre el equilibrio entre la educación tradicional y las metodologías modernas?",
        "9. ¿Cómo influye la participación de los padres en el éxito educativo de los estudiantes?",
        "10. ¿Desde tu perspectiva, cuál es el impacto de las artes y la música en la educación?",
        "11. ¿Cómo abordas la enseñanza de habilidades socioemocionales en el currículo escolar?",
        "12. ¿Cuál es tu opinión sobre la presión académica y su impacto en la salud mental de los estudiantes?",
        "13. ¿Desde tu experiencia, cómo se pueden abordar las brechas educativas entre distintas comunidades?",
        "14. ¿Cuál es tu enfoque para fomentar el pensamiento crítico y la resolución de problemas?",
        "15. ¿Qué importancia le das a la educación STEM (ciencia, tecnología, ingeniería y matemáticas) en el currículo?",
        "16. ¿Cómo manejas la diversidad cultural en el aula y promueves la comprensión intercultural?",
        "17. ¿Qué opinas sobre la educación global y cómo crees que afecta a todo el mundo?",
        "18. ¿Desde tu perspectiva, cómo la educación puede preparar a los estudiantes para el mundo laboral?",
        "19. ¿Cómo evalúas el éxito educativo más allá de las calificaciones académicas?",
        "20. ¿Cuál es tu estrategia para motivar a los estudiantes y fomentar el amor por el aprendizaje?"
      ],
      etica: [
        "1. ¿Es ético sacrificar la vida de unos pocos para salvar a muchos?",
        "2. ¿La tortura debería ser permitida en situaciones extremas para obtener información crucial?",
        "3. ¿Es moralmente aceptable intervenir genéticamente para eliminar enfermedades hereditarias?",
        "4. ¿La inteligencia artificial debería tener derechos éticos similares a los humanos?",
        "5. ¿La eutanasia debería ser legalizada en casos de sufrimiento extremo?",
        "6. ¿Es ético utilizar la ingeniería genética para mejorar las características físicas de los seres humanos?",
        "7. ¿La pena de muerte es una forma ética de castigo?",
        "8. ¿Debería permitirse la clonación humana con fines reproductivos o terapéuticos?",
        "9. ¿Es ético consumir productos de compañías que emplean prácticas laborales cuestionables?",
        "10. ¿Deberían las empresas tener responsabilidad ética en la protección del medio ambiente?",
        "11. ¿Deberían los profesionales de la salud tener la opción de rechazar tratamientos que vayan en contra de sus creencias éticas?",
        "12. ¿Debería permitirse la experimentación con animales en nombre del avance científico?",
        "13. ¿Es ético el uso de la inteligencia artificial en la toma de decisiones judiciales?",
        "14. ¿Debería existir un límite ético en la acumulación de riqueza personal?",
        "15. ¿Es ético el uso de la ingeniería social para influir en el comportamiento de las personas?",
        "16. ¿La vigilancia masiva por parte del gobierno es ética en nombre de la seguridad nacional?",
        "17. ¿Debería haber límites éticos en la edición del genoma humano para crear 'bebés diseñados'?",
        "18. ¿Es moralmente aceptable utilizar la información genética con fines de selección de parejas?",
        "19. ¿La mente humana tiene o debe tener límites éticos en la búsqueda del conocimiento?",
        "20. ¿Es ético el uso de la biotecnología para mejorar las capacidades cognitivas humanas?",
      ],   
      
      sexo: [
        "1. ¿Qué fantasías sexuales te gustaría explorar juntos?",
        "2. ¿Cuál es tu opinión sobre experimentar con nuevas posiciones sexuales?",
        "3. ¿Cómo podemos mejorar la comunicación sobre nuestras preferencias sexuales?",
        "4. ¿Qué tipo de caricias o besos te resultan más placenteros?",
        "5. ¿Qué tan importante es para ti la frecuencia sexual en nuestra relación?",
        "6. ¿Cómo podemos mantener viva la chispa sexual a lo largo del tiempo?",
        "7. ¿Te gustaría probar nuevas técnicas de masaje sensual o erótico?",
        "8. ¿Qué rol desempeña la confianza en nuestra vida sexual?",
        "9. ¿Qué importancia le das a la intimidad emocional en nuestra vida sexual?",
        "10. ¿Cuál es tu opinión sobre la idea de incorporar juguetes sexuales en nuestra intimidad?",
        "11. ¿Cuál es la experiencia sexual más memorable que has tenido?",
        "12. ¿Qué opinas sobre la idea de tener sexo en un lugar público?",
        "13. ¿Cuál es tu opinión sobre la pornografía y su impacto en la sexualidad?",
        "14. ¿Has probado alguna vez el sexo tántrico o alguna técnica de control de orgasmos?",
        "15. ¿Qué consejo te gustaría haber recibido antes de tener tu primera experiencia sexual?",
        "16. ¿Qué opinas sobre la idea de tener sexo casual?",
        "17. ¿Cuál es la experiencia más vergonzosa que has tenido durante el sexo?",
        "18. ¿Has tenido alguna experiencia con el sexo telefónico o virtual?",
        "19. ¿Qué te gustaría explorar más en tu vida sexual?",
        "20. ¿Cómo crees que el sexo puede ser una forma de expresión de amor y conexión entre personas?",
      ],
      
    
      
  };

  // Archivo de audio
  // Se crea una costante con el nombre audioUrl para poder usarla
  // Entre las comillas se coloca el link relativo al audio
  const audioUrl = "audio_boton_siguiente.mp3"; 

//Costantes de proyecto: Fin //

///Funciones del Proyecto: Comienzo//

/** Función Capitalizar
 * 
// Entra el texto y devuelve el texto con la primera letra en mayuscula
//function -> Define la funcion 
// capitalizeFirstLetter nombre de la function 
// Entre los parentesis (string) dentro de los parametros le indicamos que va a recibir, es este caso texto
// {} Los corchetes abren y cierran la funcion
// return para que devuelva un valor la funcion
// string.chartAt(0) es el metodo para que devuelva el primer caracter 
// TopUpperCase es un metodo para volver todo los carateres en mayuscula pero ya le especificamos chart(0) porque esta en cero que era la 0
// string.slice(1) metodo para extraer una parte de la cadena original
 * 
 */
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**Funcion: Siguiente Pregunta /** */
// Función para mostrar la siguiente pregunta
function nextQuestion() {
  //el document.getElementById seleciona el valor del documento html con id de indetificacion themeSelect que es la lista desplegable, fuera de los parentesis hay un value que indica el que el themeSelect es un value//
  const selectedTheme = document.getElementById('themeSelect').value;

  // Verifica si se seleccionó 'todos'
  //Se le dice que pasa si selecciona todo, que seria todo los temas//
  //la funcion se compara si es === y se pone el operado ? condicional ternario//
  const themesToSelect = selectedTheme === 'todos' ? themes : [selectedTheme];

//**Selecionar preguntas */

  //**  Selecciona aleatoriamente un tema**//
  //La costante de const con el nombre randomThemeIndex que es igual a Math.floor que es un objeto para usar funciones matematicas,floor es una funcion para redondear numeros. Random es otro metodo que devuelve un numero psudoaleatorio entre el [0 y el 1], para themesToSelect es el numero total y su longitud de lista.
  const randomThemeIndex = Math.floor(Math.random() * themesToSelect.length);
  //**Selecciona la pregunta **//
  //randomQuestionIndex almacena el //
  const randomTheme = themesToSelect[randomThemeIndex];

  //** Selecciona aleatoriamente una pregunta del tema elegido**// 
  //Se elige una pregunta aleatorioa del tema elegiodo, //
  //Genera un indice aletaorio dentro del rango de preguntas disponbles//
  const randomQuestionIndex = Math.floor(Math.random() * questions[randomTheme].length);

  //** */ Muestra la categoría y la pregunta en el contenedor**//
  // dentro del valor de document.getElementById() le dicde que tome los valores dentro de category
  const categoryElement = document.getElementById('category');
  //Aqui que tome los valores dentro de questiosn//
  const questionElement = document.getElementById('question');

  //Esto aplica el diseño a category para que cambie de color en el HTML y que empieze por mayuscula//
  categoryElement.className = `category ${randomTheme}`;
  categoryElement.innerHTML = capitalizeFirstLetter(randomTheme);

  //Muestra una pregunta especifica en un elemento HTML de clor de la categoria
  questionElement.innerHTML = questions[randomTheme][randomQuestionIndex];
  questionElement.style.setProperty('--category-color', getComputedStyle(categoryElement).color);

  //Funciones en javascript//
  // Reproduce el audio
  playAudio();

  // Vibra el dispositivo (requiere permisos del usuario)
  vibrateDevice();
}

// Función para reproducir el audio
function playAudio() {
  const audio = new Audio(audioUrl);
  //Play para reproducir el audio//
  audio.play();
}

// Función para vibrar el dispositivo
function vibrateDevice() {
  // Verifica si el navegador admite la API de vibración y si el usuario ha concedido permisos
  if ('vibrate' in navigator && window.location.protocol === 'https:') {
    navigator.vibrate([200]); // Vibra durante 200 milisegundos
  }
}

//Caraterisitcas del header//
document.querySelector('.menu-icon').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('show');
});

var lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    var footer = document.querySelector('footer');

    if (st > lastScrollTop) {
      // Scrolling down, hide the footer
      footer.style.transform = 'translateY(100%)';
    } else {
      // Scrolling up, show the footer
      footer.style.transform = 'translateY(0)';
    }

    lastScrollTop = st;
  });

  var lastScrollTopHeader = 0;

  window.addEventListener('scroll', function() {
    var stHeader = window.pageYOffset || document.documentElement.scrollTop;
    var header = document.querySelector('header');

    if (stHeader > lastScrollTopHeader) {
      // Scrolling down, hide the header
      header.classList.add('hidden');
    } else {
      // Scrolling up, show the header
      header.classList.remove('hidden');
    }

    lastScrollTopHeader = stHeader;
  });

 // Función para compartir la pregunta y el enlace
function compartirPregunta() {
  // Obtener la URL actual
  var urlActual = window.location.href;

  // Obtener el contenido de la pregunta
  var pregunta = document.getElementById("question").innerText;

  // Crear el mensaje para compartir
  var mensaje = "¡Juguemos con Preguntor ¡Echa un vistazo a esta interesante pregunta en Preguntor!\n\n" + pregunta + "\n\n" + "Enlace: ";


  // Verificar si el navegador admite la API de compartir
  if (navigator.share) {
    navigator.share({
      title: 'Pregunta en Preguntor',
      text: mensaje,
      url: urlActual
    })
      .then(() => console.log('Contenido compartido con éxito'))
      .catch((error) => console.error('Error al compartir:', error));
  } else {
    // Si el navegador no admite la API de compartir, mostrar un mensaje de alerta con el contenido a copiar
    alert("Tu navegador no admite la función de compartir. Puedes copiar la siguiente información:\n\n" + mensaje);
  }
}

//Caja para respuestas//
function toggleAnswerBox() {
  var answerBoxContainer = document.getElementById("answerBoxContainer");
  answerBoxContainer.style.display = (answerBoxContainer.style.display === "none") ? "block" : "none";
}



//Boton de capture de pantalla 
document.getElementById('screenshotButton').addEventListener('click', function() {
  tomarCapturaPantalla();
});

function tomarCapturaPantalla() {
  // Obtener el área del juego que quieres capturar (puedes ajustar esto según tu juego)
  const gameArea = document.getElementById('gameArea');

  // Crear un lienzo (canvas) del mismo tamaño que el área del juego
  const canvas = document.createElement('canvas');
  canvas.width = gameArea.offsetWidth;
  canvas.height = gameArea.offsetHeight;

  // Obtener el contexto 2D del canvas
  const ctx = canvas.getContext('2d');

  // Dibujar el área del juego en el canvas
  ctx.drawImage(gameArea, 0, 0, canvas.width, canvas.height);

  // Crear un enlace de descarga para la captura de pantalla
  const link = document.createElement('a');
  link.download = 'captura_pantalla.png'; // Nombre del archivo de la captura de pantalla
  link.href = canvas.toDataURL(); // Convertir el canvas a una URL de datos

  // Simular un clic en el enlace para iniciar la descarga
  link.click();
}