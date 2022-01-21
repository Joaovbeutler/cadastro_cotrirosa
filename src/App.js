import './App.css';

function App() {

  return (
    <div className="App">
      <div class="box">
        <form action="">
          <fieldset>
            <legend><b>Cadastro de Clientes</b></legend>

            <br />
            <div class="inputBox">
              <input type="text" name="cpf" id="cpf" class="inputUser" maxlength="14" required />
              <label for="cpf" class="labelInput">Digite seu CPF</label>
            </div>

            <br />
            <div class="inputBox">
              <input type="text" name="nome" id="nome" class="inputUser" required />
              <label for="nome" class="labelInput">Nome completo</label>
            </div>

            <br />
            <div class="inputBox">
              <input type="text" name="cidade" id="cidade" class="inputUser" required />
              <label for="cidade" class="labelInput">Cidade</label>
            </div>

            <br />
            <div class="inputBox">
              <input type="text" name="estado" id="estado" class="inputUser" maxlength="2" required />
              <label for="estado" class="labelInput">Estado</label>
            </div>

            <br />
            <div class="inputBox">
              <input type="text" name="endereco" id="endereco" class="inputUser" required />
              <label for="endereco" class="labelInput">Endereço</label>
            </div>

            <br />
            <div class="Enviar">
              <input type="submit" name="submit" id="submit" class="enviar" />
            </div>

            {/* <br />
            <input type="search" id="search" name="search" placeholder="Pesquisa" class="pesquisar" /> */}

            <br />
            <input type="reset" name="reset" id="limpar" class="limpar" />
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default App;