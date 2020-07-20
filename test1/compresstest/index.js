 
 var compressing = require('compressing')

function compress(){
	compressing.zip.compressDir('C:/Users/Lenovo/Desktop/ca48bf5f-3f44-4bf4-8729-b3afb866adf4', 'ca48bf5f-3f44-4bf4-8729-b3afb866adf4.zip')
		.then(() => {
			console.log('success');
		})
		.catch(err => {
			console.error(err);
		});	
}

// or    如果支持 ES7
// await compressing.zip.compressDir('nodejs-compressing-demo', 'nodejs-compressing-demo.zip');
// compress();

// 解压缩
 function uncompressDir(){
	opts = {zipFileNameEncoding: 'gbk'};
	compressing.zip.uncompress('ca48bf5f-3f44-4bf4-8729-b3afb866adf4.zip', 'ca48bf5f-3f44-4bf4-8729-b3afb866adf4', opts)
	.then(() => {
		console.log('success');
	})
	.catch(err => {
		console.error(err);
	})
}

// or    如果支持 ES7
uncompressDir();
// setTimeout(uncompressDir, 5000);