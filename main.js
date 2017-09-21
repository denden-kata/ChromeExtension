/* main.js */
// 確認ダイアログを表示する

// 現状、すべての画面遷移に応じてダイアログを表示してしまう
// イベント制御を記述する必要がある

// １．ブラウザ上でのリンクによる遷移 (onload)
// ２．ブラウザ上でのボタンによる遷移 (onsubmit)

// これらの２つを無視して処理したい
// jQueryとか使うと簡単に書けたりしないですかね（願望）


// 画面遷移時にアラートを表示する
window.onbeforeunload = function(){
    
    return 0;
}



/*  -----  sample1  -----  */
// こっちの書き方はよく知らない (addEventListener)
/*
window.addEventListener('beforeunload', function(e){
});
*/