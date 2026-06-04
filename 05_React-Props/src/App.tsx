import "./App.css"
import BasicProp from "./components/BasicProps.tsx"
import ChildrenProps from "./components/ChildrenProps.tsx"
import ComplexProp from "./components/ComplexProp.tsx"
import RefProp from "./components/RefProp.tsx"
import ThemeToggler from "./components/ThemeToggler.tsx"


function Navigation(){
  const isDark =true;
  
  const section =[
    {id:'basic',label:'Basic Props',icon:'📦'},
    {id:'ref',label:'ref Props',icon:'🔗'},
    {id:'Children',label:'Children Props',icon:'🐯'},
    {id:'complex',label:'complex Props',icon:'🧩'},
    {id:'theme',label:'theme Props',icon:'🎨'},
    
  ];

  return <nav className={'sticky top-0 z-50 shadow-md'}>
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-wrap gap-2 justify-center">
      {section.map((section)=>(
        <button className={'px-4 py-2 rounded-lg font-medium bg-blue-600 text-white mt-2 mr-2 hover:bg-blue-800'} key={section.id}>
          <span className={'mr-2.5'}>{section.icon}</span>
          {section.label}
        </button>
      ))}
      </div>
    </div>
  </nav>
}

function AppContent(){
  const isDark = true;

  return(
    <div className={'min-h-screen bg-gray-800 '}>

      <Navigation/>
      <div className="container mx-auto px-4 py-8">
        <header 
        className={`text-center mb-12 transition-colors ${isDark ? "text-white" : "text-gray-800"}`}>
          <h1 className="text-5xl font-bold mb-4">Reacts props explained</h1>
          <p className={`text-xl ${isDark ? "text-white" : "text-gray-800"}`}>A comprehensive guide to understanding props in React </p>
        </header>
        <div className="space-y-8 ">
          <div id="basic" className="scroll-mt-200">
            <BasicProp/>
          </div>
          <div id="basic" className="scroll-mt-200">
            <ChildrenProps/>
          </div>
          <div id="basic" className="scroll-mt-200">
            <ComplexProp/>
          </div>
          <div id="basic" className="scroll-mt-200">
            <RefProp/>
          </div>
          <div id="basic" className="scroll-mt-200">
            <ThemeToggler/>
          </div> 
        </div>
      </div>
    </div>  
  )
}

const App = () => {
  return (
   
      <AppContent/>
   
  )
}

export default App