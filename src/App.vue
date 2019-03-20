<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
              <MenuItem name="1">
                <router-link to="/">
                  <Icon type="ios-home"></Icon>
                  Home
                </router-link>
              </MenuItem>
              <MenuItem name="2">
                <router-link to="/coinList">
                  <Icon type="logo-bitcoin"></Icon>
                  Coins
                </router-link>
              </MenuItem>
              <MenuItem name="3">
                <router-link to="/coinList">
                  <Icon type="ios-analytics"></Icon>
                  Item 3
                </router-link>
              </MenuItem>
            </div>
          </Menu>
        </Header>
        <Content :style="{padding: '0 50px'}">
          <Breadcrumb :style="{margin: '20px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
          </Breadcrumb>
          <Card>
            <div class="contents">
              <router-view />
            </div>
          </Card>
        </Content>
        <Footer class="layout-footer-center">&copy; 2019 Chundro, Inc.</Footer>
      </Layout>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
* {
  padding:0;
  margin:0;
}
ul,
ol,
li {
  list-style:none;
}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.layout{
  position:relative;
  min-height:100vh;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  .ivu-layout-header {
    background:#06214A;
    height:62px;
    .ivu-menu-light {
      background:#06214A;
      .ivu-menu-item {
        padding:0;
      }
    }
    .ivu-menu-horizontal.ivu-menu-light:after {
      display:none;
    }
  }
}
.layout-logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav{
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
  a {
    display:block;
    width:100%;
    padding:0 20px;
    color:inherit;
  }
}
.layout-footer-center{
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  text-align: center;
}
.contents {
  min-height:200px;
}
</style>
