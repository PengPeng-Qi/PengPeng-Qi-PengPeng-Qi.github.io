var that;
class Tab {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id);
        // this.lis = this.main.querySelectorAll('li');
        // this.sections = this.main.querySelectorAll('section');
        // this.remove = this.main.querySelector('.icon-guanbi');
        this.addtab = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('ul');
        this.section = this.main.querySelector('.tabscon');
        this.init();
    }
    init() {
        // init()初始化操作让相关元素绑定事件
        this.updateNode();
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            // this.lis[i].onclick = function () { 
            //     console.log(this.index);
            //  } 
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;
            this.span[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;

        }
        this.addtab.onclick = this.addTab;
    }
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.span = this.main.querySelectorAll('.firstnav li span:first-child');
    }
    // 切换
    toggleTab() {
        // console.log(this);
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    // 添加
    addTab() {
        if (that.lis.length >= 8) {
            alert('不能再添加啦');
        } else {
            that.addtab.onclick = that.addTab;
            console.log(this);
            var num = that.lis.length + 1;
            that.clearClass();
            var li = '<li class="liactive"><span>测试' + num + '</span><span class="iconfont icon-guanbi"></span></li>';
            var section = '<section class="conactive">测试' + num + '</section>';

            that.ul.insertAdjacentHTML('beforeend', li);
            that.section.insertAdjacentHTML('beforeend', section);
            that.init();
        }
    }
    // 删除
    removeTab(e) {
        e.stopPropagation();
        var index = this.parentNode.index;
        console.log(index);
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        // 当有被选中时则返回
        if (document.querySelector('.liactive')) return;
        // 如果没有被选择，则前一个触发一次点击显示被选择状态
        index--;
        if (that.lis[index]) {
            that.lis[index].click();
        } else { // 如果没有前一项了，则如果有后一项，则后一项被点击触发
            that.lis[++index] && that.lis[index].click();
        }
    }
    // 修改
    editTab() {
        var str = this.innerHTML;
        // 双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        // alert(0);
        this.innerHTML = '<input type="text">';
        // this指向的是span，所以需要选择第一个子元素，input
        var input = this.children[0];
        // 双击时把之前的文字赋值给新建的文本框
        input.value = str;
        // 点击的时候默认处于选择状态
        input.select();
        input.onblur = function () {
            // 失去焦点时把input文本框的值赋值给父元素span标签
            this.parentNode.innerHTML = this.value;
        }
        // 点击回车时触发失去焦点事件
        input.onkeyup = function (e) {
            if (e.keyCode === 13) {
                this.blur();
            }
        }
    }
}
new Tab('#tab');