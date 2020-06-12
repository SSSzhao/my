<template>
  <div id="About">
    <div class="con">
      <div class="title wow fadeInRightBig">
        <h1>ABOUT<span>ME</span></h1>
        <p><i></i><span>我的基本信息和一些自我介绍</span><i></i></p>
      </div>
      <div class="info" v-marginTop>
        <div class="info-left wow rollIn">
          <img src="../assets/headImg.webp">
        </div>
        <div class="info-right wow fadeInRight">
          <ul>
            <li v-for="(item,index) in info" :key="index">
              {{item.name}}：
              <span>{{item.value}}</span>
            </li>
          </ul>
          <a href="http://123.56.115.6/cv/zhaozhong.docx"><i class="el-icon-download"></i> 下载简历</a>
        </div>
      </div>
      <div class="body">
        <div class="body-left wow fadeInRight">
          <h1>工作经历</h1>
          <ul>
            <li v-for="(item,index) in work" :key="index">
              <p class="body-time"><i class="el-icon-date"></i>{{item.date}}</p>
              <p class="body-title">{{item.title}}<span>- {{item.company}}</span></p>
              <p class="body-text">{{item.text}}</p>
            </li>
          </ul>
        </div>
        <div class="body-right wow fadeInRight" data-wow-delay="0.1s">
          <h1>项目经验</h1>
          <ul>
            <li v-for="(item,index) in project" :key="index">
              <p class="body-time"><i class="el-icon-date"></i>{{item.date}}</p>
              <p class="body-title">{{item.title}}<span>- {{item.company}}</span></p>
              <p class="body-text">{{item.text}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="skill">
        <h1 class="wow fadeInRightBig">技能介绍</h1>
        <ul>
          <li v-for="(item,index) in skill" :key="index" class="wow fadeInRight">
            <p>{{item.name}}<span>{{item.value}}</span></p>
            <div><p :style="'width:'+item.value"></p></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {WOW} from 'wowjs';
export default {
  name: "About",
  data() {
    return {
      info: [
        {name:'姓名',value:'赵中'},
        {name:'英文名',value:'Zero'},
        {name:'出生日期',value:'1999/12/04'},
        {name:'民族',value:'汉族'},
        {name:'手机号',value:'13257323077'},
        {name:'邮箱',value:'1229700931@qq.com'},
        {name:'籍贯',value:'中国湖南'},
        {name:'现居城市',value:'中国浙江'},
        {name:'籍贯',value:'中国湖南'},
        {name:'现居城市',value:'中国浙江'},
        {name:'籍贯',value:'中国湖南'},
        {name:'现居城市',value:'中国浙江'}
      ],
      work: [
        {
          date: '2017-2019',
          title: '交互设计',
          company: '华为',
          text: '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素'
        },
        {
          date: '2016-2017',
          title: 'web开发',
          company: '谷歌',
          text: '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素'
        },
        {
          date: '2014-2016',
          title: '交互设计',
          company: '阿里巴巴',
          text: '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素'
        }
      ],
      project: [
        {
          date: '2015-2014',
          title: '工程学位',
          company: '悉尼大学',
          text: '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素'
        },
        {
          date: '2014-2010',
          title: '硕士学位',
          company: '麦肯尼大学',
          text: '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素'
        },
        {
          date: '2006-2010',
          title: '学士学位',
          company: '上海复旦大学',
          text: '您可以双击这里或者点击编辑按钮来修改内容。您还可以添加图标，按钮，图片等常用元素'
        }
      ],
      skill: [
        {name: 'HTML5',value: '70%'},
        {name: 'JAVASCRIPT',value: '82%'},
        {name: 'CSS',value: '85%'},
        {name: 'VUE',value: '75%'},
        {name: 'ELEMENTUI',value: '72%'},
        {name: 'JQUERY',value: '70%'},
      ]
    }
  },
  mounted() {
    new WOW({live: false}).init();
  },
};
</script>

<style lang="scss" scoped>
@import '../css/about.css';
</style>
