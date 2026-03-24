function consultarCEP() {
    const cep = document.getElementById("cep").value;

    if (!cep) {
        document.getElementById("resultado").innerHTML = "Digite um CEP.";
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(dados => {
            if (dados.erro) {
                document.getElementById("resultado").innerHTML = "<b>CEP inválido!</b>";
                return;
            }

            document.getElementById("resultado").innerHTML = `
                <b>Logradouro:</b> ${dados.logradouro}<br>
                <b>Bairro:</b> ${dados.bairro}<br>
                <b>Cidade:</b> ${dados.localidade}<br>
                <b>Estado:</b> ${dados.uf}<br><br>
                <b>JSON retornado pelo Webservice:</b>
                <pre>${JSON.stringify(dados, null, 2)}</pre>
            `;
        })
        .catch(() => {
            document.getElementById("resultado").innerHTML = "<b>Erro ao consultar o CEP.</b>";
        });
}