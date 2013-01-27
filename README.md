# Google Develloper Group Event Administrator (GDG E.A)

Aplicativo com a inteção de prover um webapp em Apps Script para conseguir administração de eventos dos GDG's por todo o mundo.

Ele provê uma interface onde você pode cadastrar locais de eventos, eventos, e etc.

## Como contribuir com o GDG E.A?

### Veja as issues

Você deve ver as issues abertas, escolher uma, e mandar um email para
jacob at gmail dot com com o numero da issue.

Depois iremos marcar você na mesma, e pronto, já pode começar a codar! ;D

1. Para começar, faça um fork do repositório master.
2. Clone o projeto que foi "forkado" para a sua máquina.
3. Crie uma branch com o id da issue, ex: "Issue #34".
3. Use o [Editor da Google](script.google.com) para editar os seus códigos, depois salve os arquivos .gs em sua máquina local.
4. De um push.
5. SOlicite pull junto ao repositório oficial.
6. Espere um pouco, e breve seu código estará no repositório oficial! ;d

### Padrões a serem seguidos

#### Boas práticas
1. Todo o projeto deve ser em INGLÊS.
2. Commit.
    2.1. Todo commit deve possuir um prefixo, ex: [#34][Nome do Arquivo.gs] - Mensagem de commit.
    2.2. Os commits devem ser em INGLÊS.
    2.3. Faça micro-commits, para facilidar para você epara todos os outros!
3. Comente o seu projeto! Comente o que cada função faz.

#### Desenvolvimento
1. If's, for, ou qualquer outro loop, devem seguir o seguinte padrão. 
$ if(  ){
$  }
2. Funções devem seguir o seguinte padrão.
$ function ()
$ {
$  código
$ }
3. Nomeclatura de variavéis, Id e afins.
    * Nome de funções e variaveis devem ser em cammelCase. Ex: exemploDeNomeDeFuncao().
    * Nome ID's devem ser em lower case usando o unserline. Ex: .setId('exemplo_ de_id');
    * Códigos CSS devem ster em seu inicio unserline e em cammelCase. Ex: library.applyCSS('exemplo_de_id',_cssDoExemploDeId);
Exemplo de código:
$  var nameLabel = app.createLabel("Name:").setId('name_label').setVisible(true);
$  var nameTextbox = app.createTextBox().setId('name_textbox').setVisible(true);
$  library.applyCSS(nameLabel, _nameLabel);
$  library.applyCSS(nameTextbox, _nameTextbox);
4. Seja educado, siga os padrões. ;D Desta forma, _Quando você ver uma variavél_ saberá o que é, e pra que serve.




