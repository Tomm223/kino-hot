Проблемы:
1) адаптив карусели, если двигать от меньшего к большему то правильно изменяеться , так что при проверки 
моего скила верстки и адаптива все полетит и будет работать неправильно , Обязательно написать в описании

ЗАДАЧА:
  
ПЛАН:
12. PAGINATION - зареспонсить
1. !!!!! разделить функции для action на top100 search и это можно масштабировать типо раздел сериалы и тд
0. переделать верстку pagination + мб ее в карусель? => другие сайты делают чтобы при загрузки с выьранной пагинац выбранный номер страницу стоял посередине:
/// 1 ... 4 5 6 7 <8> 9 10 11 12 ... 645(last)
1. перекомпонизировать header
2. style comp 
3. 1)СТИЛИ 3 файла global var reset остальные по модулям
5. загрузку изменения пагинации изменить засветление вместо спинера и offsetY=0 наверх  
6. search  
7. auth
8. search В FilmPage непроработан
9. нужно сделать начальной стр /?collection=top100&page=1 ,а то пустая страница


#ВЫВЕСТИ SRC ДЛЯ ТЕГА A В РЕДАКС И ЧЕРЕЗ ACTION РЕШАТЬ ПРОБЛЕМУ
#решить проблему с паддингами similarCarousel
#КРЧ СДЕЛАТЬ div sidebars similar очень большими всеравно они не зайдут на over-flow:hidden 
# loading filmsList + filmPage + imgs + similar + video
# alert for film + imgs + similar + video + АЛЕРТ Трейлера
# formik 
# не локалСтейдж а куки
# background-img adaptiv + мб привязка к ширине container
# FilmCard : обьединить FilmListItem + FilmSimilarItem
#ПОИСКовик time:55:40 https://www.youtube.com/watch?v=Z0rxniw2nBc&ab_channel=%D0%95%D0%BB%D0%B5%D0%BD%D0%B0%D0%9B%D0%B8%D1%82%D0%B2%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0%E2%80%94%D0%98%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%BE%D0%B2%D0%B5%D0%B1-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8

1. другая композиция файлов:
 - комп(F_Input > index.tsx , index.module.scss => import ... './Input' ссылка по файлу) ,
2. PROPS ОБЕСПЕЧИВАЕТ РЕЮЗАБИЛЬНОСТЬ активно использует props,
 aria-label=доступность, 
3. useCallback!!!! кроме handleFunc, 
4. проверяет на существование данных условиями, 
5. border-top-left-radius!!!!! 
6. font-params if input text-area btn теряеться нужно создавать вних конкретные
7. псевлокласс ::placeholder
8. компоненты их ширины и длинны выставляються верхними блоками приме:
 - FilmList его контейнер должен быть в Layout чтобы list переиспользовался
9. плагины vs code react.js для ускорения набора кода
10. redux_localstorage_fetch через middlewear
11. возможно express.js заебись херня БЛЯ МБ ЭТО И ЕСТЬ Node.js ????? 
12. настройка webpack обязательно babel можно смотреть :
https://www.youtube.com/watch?v=S1m7B9LJtP8&t=440s&ab_channel=%D0%95%D0%BB%D0%B5%D0%BD%D0%B0%D0%9B%D0%B8%D1%82%D0%B2%D0%B8%D0%BD%D0%BE%D0%B2%D0%B0%E2%80%94%D0%98%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%BE%D0%B2%D0%B5%D0%B1-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8
time: 20:39
13. var SCSS для своего проекта: font-color-family-size, и остальное
14. style components PRops: типа size color rotate ....
15. готовая работа: убрать console.log 





 {
            test: /\.module\.s(a|c)ss$/,
            use: [
               isDevelopment ?
                  'style-loader' :
                  MiniCssExtractPlugin.loader,
               {
                  loader: 'css-loader',
                  options: {
                     module: true,
                     sourceMap: isDevelopment
                  }
               },

               {
                  loader: 'sass-loader',
                  options: {
                     module: true,
                     sourceMap: isDevelopment
                  }
               }

            ]
         },
         {
            test: /\.s(a|c)ss$/,
            use: [
               isDevelopment ?
                  'style-loader' :
                  MiniCssExtractPlugin.loader,
               {
                  loader: 'css-loader',
                  options: { module: true }
               },
               {
                  loader: 'sass-loader',
                  options: {
                     sourceMap: isDevelopment
                  }
               }


            ]
         },


          {
            test: /\.s?css$/,
            use: [
               {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                     sourceMap: true
                  }
               },
               {
                  loader: 'css-loader',
                  options: {
                     sourceMap: true
                  }
               },
               {
                  loader: 'sass-loader',
                  options: {
                     sourceMap: true
                  }
               }
            ]
         },


         {
            test: /\.scss$/, use: [
               { loader: "style-loader" },  // to inject the result into the DOM as a style block
               { loader: "css-modules-typescript-loader" },  // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
               { loader: "css-loader", options: { modules: true } },  // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
               { loader: "sass-loader" },  // to convert SASS to CSS
               // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
            ]
         },