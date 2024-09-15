import Contact from "@/components/Contact"
import Invitation from "@/components/Invitation"
import Localisation from "@/components/Localisation"
import Photocopie from "@/components/Photocopie"
import Photographie from "@/components/Photographie"
import Videographie from "@/components/Videographie"
import Image from "next/image"
import { useState } from "react"

export default function Home() {

  const [componentToShow, setComponentToShow] = useState("")

  const handleChangeComponent = (param) => {
    setComponentToShow(param)
  }


  return (
    <div>

      <div className='flex h-screen'>


        <aside className="w-1/5 bg-gray-200 p-4">
          <div className="flex flex-col space-y-4">
            <div className="h-14">
            <Image width={70} height={0} src="/images/bicor.png" alt="Logo de l'entreprise" className="logo" />

            </div>
            <button onClick={(e) => handleChangeComponent("accueil")} className="custom-btn bg-teal-600 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
              Accueil
            </button>
            <button onClick={(e) => handleChangeComponent("invitation")} className="custom-btn bg-teal-600 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
              Invitation
            </button>
            <button onClick={(e) => handleChangeComponent("photocopie")} className="custom-btn bg-teal-600 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
              Photocopie
            </button>
            <button onClick={(e) => handleChangeComponent("photographie")} className="custom-btn bg-teal-600 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
              Photographie
            </button>
            <button onClick={(e) => handleChangeComponent("videographie")} className="custom-btn bg-teal-600 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
              Videographie
            </button>
            <button onClick={(e) => handleChangeComponent("localisation")} className="custom-btn bg-teal-600 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
              Localisation
            </button>
            <button onClick={(e) => handleChangeComponent("contact")} className="custom-btn bg-teal-600 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
              Nous contacter
            </button>
          </div>
        </aside>

        <section className="w-4/5 bg-white">
          <header className="h-16 bg-violet-300">
            <h1 className="text-center">BICOR AG</h1>
          
          </header>
          <body>

          <p>Bonjour</p>
          </body>

          <div className="h-full p-4">

            {(componentToShow === "accueil") &&
              ""
            }
            {(componentToShow === "invitation") &&
              <Invitation/>
            }
            {(componentToShow === "photocopie") &&
              <Photocopie/>
            }
            {(componentToShow === "videographie") &&
              <Videographie/>
            }
             {(componentToShow === "photographie") &&
              <Photographie/>
            }
            {(componentToShow === "localisation") &&
              <Localisation/>
            }
            {(componentToShow === "contact") &&
              <Contact/>
            }

          </div>
        </section>

      </div>

    </div>
  )
}
