const base = {
    get() {
        return {
            url : "http://localhost:8080/dianyingyuangoupiao/",
            name: "dianyingyuangoupiao",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/dianyingyuangoupiao/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "电影院购票系统"
        } 
    }
}
export default base
