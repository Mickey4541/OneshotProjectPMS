# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# To setup tailwind:
-  npm install -D tailwindcss postcss autoprefixer

-npx tailwindcss init -p

- tailwindcss.com

# Configuring Routing
- npm install react-router-dom

- make files and do this:
return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<CreateProduct/>}/>
            <Route path='/edit' element={<EditProduct/>}/>
            <Route path='/product' element={<SingleProduct/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )

-#   O n e s h o t P r o j e c t P M S 
 
 

# Mockapi.io is created from keshavbhandari wala email.