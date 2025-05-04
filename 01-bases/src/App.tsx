import './App.css'
import { FormsPage } from './components/FormsPage'
// import { BasicFunctions } from './typescript/BasicFunctions'
// import { ObjectLiteral } from './typescript/ObjectLiteral'
// import { BasicType } from './typescript/BasicType'
// import { Counter } from './components/Counter'
// import { LoginPage } from './components/LoginPage'
import { AuthProvider } from './context/AuthContext'
// import { UserPage } from './components/UserPage'

function App() {

  return (
    <>
      <AuthProvider>
        <div className="flex flex-col items-center justify-center h-svh">
          <h1 className="text-4xl mb-5">
            phos
          </h1>
          {/* <BasicType/> */}
          {/* <ObjectLiteral /> */}
          {/* <BasicFunctions /> */}
          {/* <Counter /> */}
          {/* <LoginPage /> */}
          {/* <UserPage /> */}
          <FormsPage/>
        </div>
      </AuthProvider>
    </>
  )
}

export default App
