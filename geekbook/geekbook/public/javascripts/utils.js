var cont = 1;
var show = 0;
var show2 = 0;
var text = 'Ver comentários';

$(function(){

    $("#customRadioInline1").click( e => {
        cont = 1;
        $("#attachments").empty()
    })

    $(document).on("click", ".files", function() {
        var bloco = $('<div></div>', {id: 'files'})
        var campo = $('<div></div>', {class: 'form-group', id: 'fg1'})
        var div = $('<div></div>', {class: 'custom-file', id: 'file1'})
        var fileInput = $('<input/>', {class: 'custom-file-input', id:'fileinput1', type: 'file', name: "file"})
        var fileLabel = $('<label class="custom-file-label" id="filelabel1" for="fileinput1"> Escolha o Ficheiro</label>')
        var button = $('<button id="mais1" type="button" onclick="mais()" class="btn btn-primary">+1 Ficheiro</button>')
        
        $("#attachments").empty()

        $("#attachments").append(bloco,button)
        $("#files").append(campo)
        $("#fg1").append(div)
        $("#file1").append(fileInput,fileLabel)
    })

    

    
    $("#customRadioInline4").click( e => {
        cont = 1;
        var textbox = $('<textarea class="form-control" name="code" id="comments" rows="15" style="background-color:black;color:white;border:none;padding:2%;font-size:10px;font-family:Consolas,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New;"></textarea>')
        $("#attachments").empty()
        $("#attachments").append(textbox)

    })

    $(document).on("click", ".comment", function () {
        var postId = $(this).data('id');
        if(show2 == 0){
            $( '#c'+postId ).show( "slow");
            show2 = 1;
        }
        else{
            $( '#c'+postId ).hide( "slow");
            show2 = 0;
        }
   });
    
    
    //Ver os comentários 
    $(document).on("click", ".post", function () {
        var postId = $(this).data('id');
        if(show == 0){
            $( '.'+postId ).show( "slow");
            text = $('#v'+postId).text();
            $('#v'+postId).text("Esconder Comentários");
            show = 1;
        }
        else{
            $( '.'+postId ).hide( "slow");
            $('#v'+postId).text(text);
            show = 0;
        }
    });

    $(document).on("click", ".pop", function () {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');   
    });	

    $(document).on('change', '.custom-file-input', function (event) {
        $(this).next('.custom-file-label').html(event.target.files[0].name);
    })


})

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

  
function show_me(linha, f){
    //var ficheiro = $('<pre>' + JSON.stringify(f) + f.path +  '</pre>')
    $('#display').modal('hide');
    console.log('PATH >>>>>>>' + f.path)
    var path = f.path;
    $('#img').attr('src',path)
    // $('#display').append(ficheiro)
    $('#display').modal()
}

function mais(){
    cont++;
    
    var campo = $('<div></div>', {class: 'form-group', id: 'fg' + cont})
    var div = $('<div></div>', {class: 'custom-file', id: 'file' + cont})
    var fileLabel = $('<label/>', {class:'custom-file-label', id:'filelabel'+cont,for:'fileinput'+cont, html:'Escolha o Ficheiro'})
    var fileInput = $('<input/>', {class: 'custom-file-input', id:'fileinput'+cont, type: 'file', name: "file"})
    
    $("#files").append(campo)
    $("#fg"+cont).append(div)
    $("#file"+cont).append(fileInput, fileLabel)
}