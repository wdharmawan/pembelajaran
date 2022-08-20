class Stack {
    constructor() {
        this.barang = []
        this.angka = 0
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
}

const stack = new Stack()

stack.push(100)
stack.push(200)
stack.push(300)
stack.push(400)
stack.push(500)

stack.pop()
stack.pop()
stack.pop()

stack.isEmpty()

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