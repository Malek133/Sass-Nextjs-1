// import {signIn} from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function ButtonsProviders() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Button onClick={async () => console.log('signin go')} 
        className="flex items-center gap-2">
          
          <span>Se connecter a googel</span>
        </Button>

        <Button onClick={async () => console.log('signin git')} 
        className="flex items-center gap-2">
          
          <span>Se connecter a github</span>
        </Button>
        
      </div>
    </>
  );
}