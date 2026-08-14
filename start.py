import os
import sys
import subprocess
import time
import webbrowser

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)

    print("=========================================")
    print(" Iniciando o servidor Green Smile...")
    print(f" Pasta: {script_dir}")
    print("=========================================")
    print("\nAbrindo o site no seu navegador...\n")

    # Abre o navegador automaticamente
    try:
        webbrowser.open("http://localhost:5173")
    except Exception:
        pass

    try:
        subprocess.run("cmd /c npm run dev", shell=True)
    except Exception as e:
        print(f"\nErro ao iniciar o servidor: {e}")
    
    input("\nPressione ENTER para fechar esta janela...")

if __name__ == "__main__":
    main()
