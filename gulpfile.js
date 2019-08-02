var gulp=require('gulp');
var connect=require('gulp-connect');
	gulp.task("copyall",async ()=>{
		gulp.src('taoshu/**/*')
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\taoshu'));
	});
	
	gulp.task("watchall", async ()=>{
		gulp.watch('taoshu/**/*',async ()=>{
			gulp.src('taoshu/**/*')
			.pipe(gulp.dest('D:\\phpStudy\\WWW\\taoshu'));
		});
	});
	// gulp.task("server",async ()=>{
	// 	connect.server({root:"dist"});
	// });
	
		
		