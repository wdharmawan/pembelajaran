class Stack {
    constructor() {
        this.barang = []
        this.angka = 0
        this.maximum = 32
    }

    //menambahkan elemen ke tumpukan
    push(elemen) {
        this.barang[this.angka] = elemen
        console.log(`${elemen} ditumpukan ${this.angka}`)
        this.angka += 1
        return this.angka -1
    }

    //menghapus elemen ditumpukan atas
    pop() {
        if(this.angka == 0) return undefined
        let hapusBarang = this.barang[this.angka - 1]
        this.angka -= 1
        console.log(`angka ${hapusBarang} terhapus`)
        return hapusBarang
    }
    
    //mengecek elemen teratas ditumpukan
    peek() {
        console.log(`Tumpukan teratas sekarang adalah nomer ${this.barang[this.angka - 1]}`)
        return this.barang[this.angka - 1]
    }

    //mengecek apakah tumpukan kosong
    isEmpty() {
        console.log(this.angka == 0 ? 'Tumpukan Kosong' : 'Tumpukan tidak kosong')
        return this.angka == 0
    }
    isfull(){
        console.log(this.angka == this.maximum ? 'tumpukan penuh ': 'tumpukan belum penuh' )
        return this.maximum == this.angka 
    }
}

const stack = new Stack()
var isi = 100;



for (let i = 0;i < stack.maximum;i++){
    stack.push(isi)
    isi+=100
} 

for (let i = 0;i< stack.maximum;i++){
    if (i <= 5){
        stack.pop()
    }
    


}
stack.isEmpty()
stack.isfull()
stack.peek()


//membalik bacaan
function reverse(str) {
    let stack = [];
    // menaruh huruf kedalam stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    // mengeluarkan huruf secara terbalik
    let reverseStr = '';
    while (stack.length > 0) {
        reverseStr += stack.pop();
    }
    return reverseStr;
}
console.log(reverse('WISNU BAIK'));