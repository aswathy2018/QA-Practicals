function fold(folder, arr = []){
    for(let val of folder.files){
        arr.push(val)
    }

    for(let val of folder.folders){
        fold(val, arr)
    }
    return arr
}

const fileSystem = {
  name: 'root',
  files: ['file1.txt', 'file2.txt'],
  folders: [
    {
      name: 'docs',
      files: ['doc1.pdf', 'doc2.pdf'],
      folders: [
        {
          name: 'personal',
          files: ['resume.docx'],
          folders: [],
        },
      ],
    },
    {
      name: 'images',
      files: ['photo1.jpg', 'photo2.jpg'],
      folders: [],
    },
  ],
};

console.log(fold(fileSystem));


// Output: 
// ['file1.txt', 'file2.txt', 'doc1.pdf', 'doc2.pdf', 'resume.docx', 'photo1.jpg', 'photo2.jpg']