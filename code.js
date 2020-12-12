var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2fc0fcdc-2963-4a72-a2a7-4e88e2199e1a","3528d751-0927-43cb-8e75-41ed323682d2","5ad4aac9-1c30-4148-b172-4bd21876ac72","9ab65364-f56e-4959-9e1e-ccccc3dfea98","45382365-babc-4805-a847-e9ee4b0d6f9f","b7bd8755-265d-43e8-826a-715eebce629b","5673e2de-7770-4295-8e7e-1305303157d8","e322928d-854d-40fd-961b-e3598fb333f0","075097e7-a3e7-4e31-a8a9-b47cba500ebf","bf76bd51-3a01-4037-aad8-62b22352f47d","7bd073be-b9ff-454d-90a2-6deae50f6c5b","02355dfe-5320-440f-ad93-fad4380c9623","43eb2b23-bb1c-4a79-8af9-fd0bfa4fff11","c76b6f8b-0f75-42aa-bc86-bfefdd53567b","997eec72-6273-4030-ac91-c348a748bdb3","87bf36c1-94b5-40f3-83ad-d2153dc384fd","c9e0c5e7-ff53-43ea-ba33-ca23f0e07a68","9f8ea10e-cb71-4de8-94b4-4db7a79255cc","3e57cc99-ba9a-4686-8a99-7eee811c7614","926660a8-f6f6-4f54-a035-a079d554da20","97b00be6-8d15-4114-b380-1d6e87eb6281","10986c61-c75d-4efa-81e7-4675734cf933","3b5d90da-6d28-4549-ae9d-2218362cd99d","7bbd5299-f75f-435b-90cd-2825b2cdc50f","854e0c26-af97-47e2-8585-15f4dfd77000","71a72560-5bd5-4aac-912e-a8d16e2e6a4f","d35214d4-d1d9-454a-a929-9cb724ff748d","341f234e-2667-429b-bd19-d1b5c747acff","defc868a-99c3-4891-ace9-4b686540ee92","878220be-daba-467c-b80a-a7a5be0e4c38","a16567ea-026e-41ad-ab46-2ec626b20490","4521892a-eec9-4ab5-9b53-59d7280fbdfb","e965f3ad-8bf9-4895-9c05-4ca218724626","84be2dff-9b74-42d3-99b6-525e2742a8d8","f16d82ae-383f-42ec-b612-81f0f27c25ce","fc1480f6-8c98-493d-800c-0e0ea72ffb37","e302f954-aed6-4da5-b210-30a71c5c685e","892251f2-2718-4ecc-ba41-f214658be1b5","c25f39ff-3bcf-4685-9e7b-a8fdd2133565","08bd04d4-c29e-4fdc-bb59-bfe1bab6c102","bc677173-47bc-4df1-9c17-c7953dfb115f","64297727-428c-4393-94da-415808d7d3f9"],"propsByKey":{"2fc0fcdc-2963-4a72-a2a7-4e88e2199e1a":{"name":"crew red(walk right)","sourceUrl":null,"frameSize":{"x":45,"y":64},"frameCount":12,"looping":true,"frameDelay":1,"version":"5LeIbK_7lcyxg7Bj1vRmVy2yJlwnRN32","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":192},"rootRelativePath":"assets/2fc0fcdc-2963-4a72-a2a7-4e88e2199e1a.png"},"3528d751-0927-43cb-8e75-41ed323682d2":{"name":"crew red(walk left)","sourceUrl":null,"frameSize":{"x":45,"y":64},"frameCount":12,"looping":true,"frameDelay":1,"version":"I.jd97wG657RfaxzdY4QgPF_FLk_UGDD","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":192},"rootRelativePath":"assets/3528d751-0927-43cb-8e75-41ed323682d2.png"},"5ad4aac9-1c30-4148-b172-4bd21876ac72":{"name":"crew red(idle left)","sourceUrl":null,"frameSize":{"x":45,"y":59},"frameCount":1,"looping":true,"frameDelay":1,"version":"GBcMrdkomnw8jbEWZ4EFEVPkU6we76jn","loadedFromSource":true,"saved":true,"sourceSize":{"x":45,"y":59},"rootRelativePath":"assets/5ad4aac9-1c30-4148-b172-4bd21876ac72.png"},"9ab65364-f56e-4959-9e1e-ccccc3dfea98":{"name":"crew red(idle right)","sourceUrl":null,"frameSize":{"x":45,"y":59},"frameCount":1,"looping":true,"frameDelay":1,"version":"NN34GBCL0qf.A.aLQiJuEwtrVKP1pOPK","loadedFromSource":true,"saved":true,"sourceSize":{"x":45,"y":59},"rootRelativePath":"assets/9ab65364-f56e-4959-9e1e-ccccc3dfea98.png"},"45382365-babc-4805-a847-e9ee4b0d6f9f":{"name":"Untitled.png_1","sourceUrl":null,"frameSize":{"x":600,"y":498},"frameCount":1,"looping":true,"frameDelay":12,"version":"znS1JSPW1_LxXepOCCTFI9W0tuQqzqMB","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":498},"rootRelativePath":"assets/45382365-babc-4805-a847-e9ee4b0d6f9f.png"},"b7bd8755-265d-43e8-826a-715eebce629b":{"name":"Untitled.png_2","sourceUrl":null,"frameSize":{"x":900,"y":424},"frameCount":1,"looping":true,"frameDelay":12,"version":"7ZgwHLZwByYc8yfx2XYv3oqhXFSviKAn","loadedFromSource":true,"saved":true,"sourceSize":{"x":900,"y":424},"rootRelativePath":"assets/b7bd8755-265d-43e8-826a-715eebce629b.png"},"5673e2de-7770-4295-8e7e-1305303157d8":{"name":"Untitled.png_3","sourceUrl":null,"frameSize":{"x":130,"y":168},"frameCount":1,"looping":true,"frameDelay":12,"version":"uFAmoOxQF9Xn7uhj4gR5WlxBzFfSibbE","loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":168},"rootRelativePath":"assets/5673e2de-7770-4295-8e7e-1305303157d8.png"},"e322928d-854d-40fd-961b-e3598fb333f0":{"name":"laptop_1","sourceUrl":null,"frameSize":{"x":45,"y":44},"frameCount":1,"looping":true,"frameDelay":12,"version":"zAYv1YWpI9lWjG861cHskZ0C64N5478M","categories":["generic_items"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":45,"y":44},"rootRelativePath":"assets/e322928d-854d-40fd-961b-e3598fb333f0.png"},"075097e7-a3e7-4e31-a8a9-b47cba500ebf":{"name":"Untitled.png_4","sourceUrl":null,"frameSize":{"x":500,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"F18UDHdhDmUaht.M0kNVlaylIo1THku3","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":120},"rootRelativePath":"assets/075097e7-a3e7-4e31-a8a9-b47cba500ebf.png"},"bf76bd51-3a01-4037-aad8-62b22352f47d":{"name":"Untitled.png_4_copy_1","sourceUrl":null,"frameSize":{"x":500,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"Alk0xkDE_b7nxeFiULiFtkOApa.zvmhf","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":120},"rootRelativePath":"assets/bf76bd51-3a01-4037-aad8-62b22352f47d.png"},"7bd073be-b9ff-454d-90a2-6deae50f6c5b":{"name":"Untitled.png_5","sourceUrl":null,"frameSize":{"x":120,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"viY7XGgYCS7ghrr4ZhUC.ZQrUfQ.Hqd.","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":400},"rootRelativePath":"assets/7bd073be-b9ff-454d-90a2-6deae50f6c5b.png"},"02355dfe-5320-440f-ad93-fad4380c9623":{"name":"Untitled.png_9","sourceUrl":null,"frameSize":{"x":400,"y":290},"frameCount":1,"looping":true,"frameDelay":12,"version":"z9AsNBLX_0l.KV3K0lmMnDwk9s3WPSf2","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":290},"rootRelativePath":"assets/02355dfe-5320-440f-ad93-fad4380c9623.png"},"43eb2b23-bb1c-4a79-8af9-fd0bfa4fff11":{"name":"unnamed (1).jpg_1","sourceUrl":null,"frameSize":{"x":160,"y":92},"frameCount":1,"looping":true,"frameDelay":12,"version":"h8mtSWaM9AEOCv6oea19yKjLYK4uVfko","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":92},"rootRelativePath":"assets/43eb2b23-bb1c-4a79-8af9-fd0bfa4fff11.png"},"c76b6f8b-0f75-42aa-bc86-bfefdd53567b":{"name":"images.png_1","sourceUrl":null,"frameSize":{"x":130,"y":96},"frameCount":1,"looping":true,"frameDelay":12,"version":"mN6p4hWTd8qO969Cn7subaDTjHO5yFRS","loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":96},"rootRelativePath":"assets/c76b6f8b-0f75-42aa-bc86-bfefdd53567b.png"},"997eec72-6273-4030-ac91-c348a748bdb3":{"name":"Untitled.png_nm","sourceUrl":null,"frameSize":{"x":120,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZYNjzQ2klQtEpDqsvpYOycMhwUUUsFcg","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":50},"rootRelativePath":"assets/997eec72-6273-4030-ac91-c348a748bdb3.png"},"87bf36c1-94b5-40f3-83ad-d2153dc384fd":{"name":"burger_1","sourceUrl":null,"frameSize":{"x":30,"y":26},"frameCount":1,"looping":true,"frameDelay":12,"version":"U9n2RDIQRs9cMEZ3Y06rXpAcIDzMjl2f","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":26},"rootRelativePath":"assets/87bf36c1-94b5-40f3-83ad-d2153dc384fd.png"},"c9e0c5e7-ff53-43ea-ba33-ca23f0e07a68":{"name":"ice_cream_1","sourceUrl":null,"frameSize":{"x":15,"y":31},"frameCount":1,"looping":true,"frameDelay":12,"version":"TLOfVgFMtXTForB7GZARSdrMDpVoeT4m","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":31},"rootRelativePath":"assets/c9e0c5e7-ff53-43ea-ba33-ca23f0e07a68.png"},"9f8ea10e-cb71-4de8-94b4-4db7a79255cc":{"name":"Untitled.png_ad","sourceUrl":null,"frameSize":{"x":220,"y":152},"frameCount":1,"looping":true,"frameDelay":12,"version":"yY_5e05_IC2KVqbDcq07JJxX0_h4Stvy","loadedFromSource":true,"saved":true,"sourceSize":{"x":220,"y":152},"rootRelativePath":"assets/9f8ea10e-cb71-4de8-94b4-4db7a79255cc.png"},"3e57cc99-ba9a-4686-8a99-7eee811c7614":{"name":"Untitled.png_b2","sourceUrl":null,"frameSize":{"x":404,"y":275},"frameCount":1,"looping":true,"frameDelay":12,"version":"Y8ZyBxL.wbHjcBqMdutWzRFTfoDV82SA","loadedFromSource":true,"saved":true,"sourceSize":{"x":404,"y":275},"rootRelativePath":"assets/3e57cc99-ba9a-4686-8a99-7eee811c7614.png"},"926660a8-f6f6-4f54-a035-a079d554da20":{"name":"images (2).jpg_1","sourceUrl":null,"frameSize":{"x":180,"y":90},"frameCount":1,"looping":true,"frameDelay":12,"version":"8CBk0u5FElTxL8_9n.cpQI.imySj.6I9","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":90},"rootRelativePath":"assets/926660a8-f6f6-4f54-a035-a079d554da20.png"},"97b00be6-8d15-4114-b380-1d6e87eb6281":{"name":"100357-200.png_1","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"GkKgGv_Wp_MuiGquciwdhDNb_djPCq.r","loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/97b00be6-8d15-4114-b380-1d6e87eb6281.png"},"10986c61-c75d-4efa-81e7-4675734cf933":{"name":"Untitled.pnghg","sourceUrl":null,"frameSize":{"x":550,"y":374},"frameCount":1,"looping":true,"frameDelay":12,"version":"2RD_l77o_LnEQb9xc2f8oV_E1CWBE03a","loadedFromSource":true,"saved":true,"sourceSize":{"x":550,"y":374},"rootRelativePath":"assets/10986c61-c75d-4efa-81e7-4675734cf933.png"},"3b5d90da-6d28-4549-ae9d-2218362cd99d":{"name":"Untitled.png_gh","sourceUrl":null,"frameSize":{"x":550,"y":374},"frameCount":1,"looping":true,"frameDelay":12,"version":"6ULOkZJgj_Ex5n3HLd6Aive8nWJCeR.E","loadedFromSource":true,"saved":true,"sourceSize":{"x":550,"y":374},"rootRelativePath":"assets/3b5d90da-6d28-4549-ae9d-2218362cd99d.png"},"7bbd5299-f75f-435b-90cd-2825b2cdc50f":{"name":"images (1).png_1","sourceUrl":null,"frameSize":{"x":80,"y":97},"frameCount":1,"looping":true,"frameDelay":12,"version":"0ZskljQ8W1z4BHPWUqeW78ArfqNENw2P","loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":97},"rootRelativePath":"assets/7bbd5299-f75f-435b-90cd-2825b2cdc50f.png"},"854e0c26-af97-47e2-8585-15f4dfd77000":{"name":"Untitled.png_b3","sourceUrl":null,"frameSize":{"x":600,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"Fjmzk1Mlg5rUSFwpn3cO4F.TOxeJpfGG","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":400},"rootRelativePath":"assets/854e0c26-af97-47e2-8585-15f4dfd77000.png"},"71a72560-5bd5-4aac-912e-a8d16e2e6a4f":{"name":"Untitled.png_wall5","sourceUrl":null,"frameSize":{"x":410,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"UwAwO_FxWFKXEqgXk7g51zy7KJE3b0jv","loadedFromSource":true,"saved":true,"sourceSize":{"x":410,"y":100},"rootRelativePath":"assets/71a72560-5bd5-4aac-912e-a8d16e2e6a4f.png"},"d35214d4-d1d9-454a-a929-9cb724ff748d":{"name":"kissclipart-computer-desk-clipart-computer-desk-clip-art-311c34710aab5c8e.jpg_1","sourceUrl":null,"frameSize":{"x":125,"y":98},"frameCount":1,"looping":true,"frameDelay":12,"version":"kJB5vzlG9HKhOqUjFC2HZJZM9qSLUsjt","loadedFromSource":true,"saved":true,"sourceSize":{"x":125,"y":98},"rootRelativePath":"assets/d35214d4-d1d9-454a-a929-9cb724ff748d.png"},"341f234e-2667-429b-bd19-d1b5c747acff":{"name":"download (5).jpg_1","sourceUrl":null,"frameSize":{"x":90,"y":90},"frameCount":1,"looping":true,"frameDelay":12,"version":"upaDS4nYGY7dEX_m5LhatEB74WgeED2l","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":90},"rootRelativePath":"assets/341f234e-2667-429b-bd19-d1b5c747acff.png"},"defc868a-99c3-4891-ace9-4b686540ee92":{"name":"Untitled.png_emer","sourceUrl":null,"frameSize":{"x":40,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"tOxN._5l8gfuwryXt4.KxHvnf_eFvojO","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":35},"rootRelativePath":"assets/defc868a-99c3-4891-ace9-4b686540ee92.png"},"878220be-daba-467c-b80a-a7a5be0e4c38":{"name":"download (6).jpg_1","sourceUrl":null,"frameSize":{"x":60,"y":46},"frameCount":1,"looping":true,"frameDelay":12,"version":"G_94S9iJgpOU5jsRxitbu_9dNJ6lIgm1","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":46},"rootRelativePath":"assets/878220be-daba-467c-b80a-a7a5be0e4c38.png"},"a16567ea-026e-41ad-ab46-2ec626b20490":{"name":"Untitled.png_b4","sourceUrl":null,"frameSize":{"x":400,"y":308},"frameCount":1,"looping":true,"frameDelay":12,"version":"_tbI5mMlTfyRmNaGkzRKsfRzrMpl9sA0","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":308},"rootRelativePath":"assets/a16567ea-026e-41ad-ab46-2ec626b20490.png"},"4521892a-eec9-4ab5-9b53-59d7280fbdfb":{"name":"download (7).jpg_1","sourceUrl":null,"frameSize":{"x":60,"y":54},"frameCount":1,"looping":true,"frameDelay":12,"version":"L_gWI5YKqo_WPkjysK9xaw8TwUG.T6Ax","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":54},"rootRelativePath":"assets/4521892a-eec9-4ab5-9b53-59d7280fbdfb.png"},"e965f3ad-8bf9-4895-9c05-4ca218724626":{"name":"Untitled.png_b5","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"uCmXVYny9i4gemK8m9ebrBvli_HfpTle","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/e965f3ad-8bf9-4895-9c05-4ca218724626.png"},"84be2dff-9b74-42d3-99b6-525e2742a8d8":{"name":"images (4).jpg_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"WagDEjan65irSSfx3s3qU4X8ST5yabPq","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/84be2dff-9b74-42d3-99b6-525e2742a8d8.png"},"f16d82ae-383f-42ec-b612-81f0f27c25ce":{"name":"medical-flat-022-heart-rate-machine-512.png_1","sourceUrl":null,"frameSize":{"x":85,"y":85},"frameCount":1,"looping":true,"frameDelay":12,"version":"NvuqqJJLwbAx.B9bgl_NvzBOSjMiTsLo","loadedFromSource":true,"saved":true,"sourceSize":{"x":85,"y":85},"rootRelativePath":"assets/f16d82ae-383f-42ec-b612-81f0f27c25ce.png"},"fc1480f6-8c98-493d-800c-0e0ea72ffb37":{"name":"Untitled.png_wall6","sourceUrl":null,"frameSize":{"x":500,"y":240},"frameCount":1,"looping":true,"frameDelay":12,"version":"dp1s16YhDwQzKY3dDX7DXJGbndF2AMuM","loadedFromSource":true,"saved":true,"sourceSize":{"x":500,"y":240},"rootRelativePath":"assets/fc1480f6-8c98-493d-800c-0e0ea72ffb37.png"},"e302f954-aed6-4da5-b210-30a71c5c685e":{"name":"download (8).jpg_1","sourceUrl":null,"frameSize":{"x":95,"y":147},"frameCount":1,"looping":true,"frameDelay":12,"version":"lgb7n5rypLi5QgRzlt7blq6XdJwkg7z_","loadedFromSource":true,"saved":true,"sourceSize":{"x":95,"y":147},"rootRelativePath":"assets/e302f954-aed6-4da5-b210-30a71c5c685e.png"},"892251f2-2718-4ecc-ba41-f214658be1b5":{"name":"Untitled.png_text1","sourceUrl":null,"frameSize":{"x":400,"y":282},"frameCount":1,"looping":true,"frameDelay":12,"version":"WJUabeb_PhkHZcr8s26PobLYeuzbpr.A","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":282},"rootRelativePath":"assets/892251f2-2718-4ecc-ba41-f214658be1b5.png"},"c25f39ff-3bcf-4685-9e7b-a8fdd2133565":{"name":"Untitled.pngtext2","sourceUrl":null,"frameSize":{"x":357,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"EkM4x2lE20YDXuvcz.h9Gb.n9lkNtz0I","loadedFromSource":true,"saved":true,"sourceSize":{"x":357,"y":80},"rootRelativePath":"assets/c25f39ff-3bcf-4685-9e7b-a8fdd2133565.png"},"08bd04d4-c29e-4fdc-bb59-bfe1bab6c102":{"name":"Untitled.pngb6","sourceUrl":null,"frameSize":{"x":499,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"mNGnSViIJUqCbmKoZIj6ENZ9LW5rpqa8","loadedFromSource":true,"saved":true,"sourceSize":{"x":499,"y":400},"rootRelativePath":"assets/08bd04d4-c29e-4fdc-bb59-bfe1bab6c102.png"},"bc677173-47bc-4df1-9c17-c7953dfb115f":{"name":"beaker-cartoon-science-chemistry-experiment-logo-laboratory-echipament-de-laborator-line-png-clipart-thumbnail.jpg_1","sourceUrl":null,"frameSize":{"x":270,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":".eSA7pW6wunCwpX0zXzxKts4v8PD5l0H","loadedFromSource":true,"saved":true,"sourceSize":{"x":270,"y":200},"rootRelativePath":"assets/bc677173-47bc-4df1-9c17-c7953dfb115f.png"},"64297727-428c-4393-94da-415808d7d3f9":{"name":"download (9).jpg_1","sourceUrl":null,"frameSize":{"x":200,"y":112},"frameCount":1,"looping":true,"frameDelay":12,"version":"SSbkI8lDRQnGaQEI28WCqLJd9_ngnC3_","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":224},"rootRelativePath":"assets/64297727-428c-4393-94da-415808d7d3f9.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//room1
var b1 = createSprite(200,200,400,400);
b1.setAnimation("Untitled.png_2");
var table1 = createSprite(90,220,40,40);
table1.setAnimation("Untitled.png_3");
var table2 = createSprite(280,220,40,40);
table2.setAnimation("Untitled.png_3");
var wall1 = createSprite(200,-22,440,40);
wall1.setAnimation("Untitled.png_4");
var wall2 = createSprite(-25,200,50,50);
wall2.setAnimation("Untitled.png_5");
var wall3 = createSprite(200,430,40,40);
wall3.setAnimation("Untitled.png_4_copy_1")
var wall4 = createSprite(410,200,40,40);
wall4.setAnimation("Untitled.png_5")
var gate = createSprite(405,200,50,100);
gate.shapeColor = "#5b5b5c";
var laptop = createSprite(280,200,40,40);
laptop.setAnimation("laptop_1");
var point1 = createSprite(0,800,0.1,0.1);
var m1 = createSprite(330,50,40,40);
m1.setAnimation("unnamed (1).jpg_1");
var m2 = createSprite(210,50,40,40);
m2.setAnimation("images.png_1");
var m3 = createSprite(100,50,100,30);
m3.setAnimation("Untitled.png_nm");
var burger = createSprite(70,58,40,40);
burger.setAnimation("burger_1");
var burger2 = createSprite(105,58,40,40);
burger2.setAnimation("burger_1");
var burger3 = createSprite(80,170,40,40);
burger3.setAnimation("burger_1");
var burger5 = createSprite(290,160,40,40);
burger5.setAnimation("burger_1");
var burger4 = createSprite(100,200,40,40);
burger4.setAnimation("burger_1");
var burger6 = createSprite(260,250,40,40);
burger6.setAnimation("burger_1");
var icecream2 = createSprite(90,240,40,40);
icecream2.setAnimation("ice_cream_1");
var icecream = createSprite(130,55,40,40);
icecream.setAnimation("ice_cream_1");
var line1 = createSprite(200,50,400,0.1);
var t1 = createSprite(-800,200,60,60);
t1.setAnimation("Untitled.png_9");
//room2
 var b2 = createSprite(-800,230,400,400);
 b2.setAnimation("Untitled.png_gh");
 var line2 = createSprite(-700,-8,400,200);
 line2.shapeColor = "#d28265";
 var line3 = createSprite(-500,230,30,100);
 line3.shapeColor = "#6e6666"
 var gate2 = createSprite(-400,230,30,100);
 gate2.shapeColor = "#6e6666"
 var m4 = createSprite(-7200,50,40,40);
 m4.setAnimation("images (2).jpg_1");
 var admin = createSprite(-800,230,30,30);
 admin.setAnimation("Untitled.png_ad");
 var m5 = createSprite(-600,330,40,40);
 m5.setAnimation("100357-200.png_1");
 var m6 = createSprite(-700,330,40,40);
 m6.setAnimation("100357-200.png_1");
 var m7 = createSprite(-600,50,40,40);
 m7.setAnimation("images (1).png_1");
 var m8 = createSprite(-600,50,40,40);
 m8.setAnimation("images (1).png_1");
//for room3
var b3 = createSprite(-1000,200,400,400);
b3.setAnimation("Untitled.png_b3");
var wall5 = createSprite(-700,50,50,50);
wall5.setAnimation("Untitled.png_wall5");
var emergency = createSprite(-600,65,50,50);
emergency.setAnimation("Untitled.png_emer");
var dustbin = createSprite(-5000,75,50,50);
dustbin.setAnimation("download (6).jpg_1");
var offtable3 = createSprite(-9000,360,40,40);
offtable3.setAnimation("kissclipart-computer-desk-clipart-computer-desk-clip-art-311c34710aab5c8e.jpg_1")
var offtable4 = createSprite(-5000,360,40,40);
offtable4.setAnimation("kissclipart-computer-desk-clipart-computer-desk-clip-art-311c34710aab5c8e.jpg_1");
var offtable1 = createSprite(-9000,200,40,40);
offtable1.setAnimation("kissclipart-computer-desk-clipart-computer-desk-clip-art-311c34710aab5c8e.jpg_1")
var offtable2 = createSprite(-5000,200,40,40);
offtable2.setAnimation("kissclipart-computer-desk-clipart-computer-desk-clip-art-311c34710aab5c8e.jpg_1");
var lecturetable1 = createSprite(-700,60,50,50);
lecturetable1.setAnimation("download (5).jpg_1");
var b4 = createSprite(-900,200,40,40);
b4.setAnimation("Untitled.png_b4");
var leaf1 = createSprite(-600,150,50,50);
leaf1.setAnimation("download (7).jpg_1");
var leaf2 = createSprite(-600,220,40,40);
leaf2.setAnimation("download (7).jpg_1");
var leaf3 = createSprite(-600,120,40,40);
leaf3.setAnimation("download (7).jpg_1");
var leaf4 = createSprite(-600,240,40,40);
leaf4.setAnimation("download (7).jpg_1");
var leaf5 = createSprite(-600,100,40,40);
leaf5.setAnimation("download (7).jpg_1");
var gate3 = createSprite(-800,250,30,100);
gate3.shapeColor = "#6e6666"
var gate4 = createSprite(-9230,250,30,100);
gate4.shapeColor = "#6e6666"
//for room4
var b5 = createSprite(-9000,200,40,40);
b5.setAnimation("Untitled.png_b5");
var wall6 = createSprite(-9000,30,40,40);
wall6.setAnimation("Untitled.png_wall6")
var hm1 = createSprite(-9000,60,40,40);
hm1.setAnimation("medical-flat-022-heart-rate-machine-512.png_1");
var hm2 = createSprite(-9000,60,40,40);
hm2.setAnimation("medical-flat-022-heart-rate-machine-512.png_1");
var hm3 = createSprite(-9000,60,40,40);
hm3.setAnimation("medical-flat-022-heart-rate-machine-512.png_1");
var hm4 = createSprite(-9000,60,40,40);
hm4.setAnimation("medical-flat-022-heart-rate-machine-512.png_1");
var hm5 = createSprite(-9000,315,40,40);
hm5.setAnimation("medical-flat-022-heart-rate-machine-512.png_1");
var hm6 = createSprite(-9000,315,40,40);
hm6.setAnimation("medical-flat-022-heart-rate-machine-512.png_1");
var hm7 = createSprite(-9000,315,40,40);
hm7.setAnimation("medical-flat-022-heart-rate-machine-512.png_1");
var hm8 = createSprite(-9000,315,40,40);
hm8.setAnimation("medical-flat-022-heart-rate-machine-512.png_1");
var medb1 = createSprite(-3200,100,50,50);
medb1.setAnimation("images (4).jpg_1");
var medb2 = createSprite(-3200,360,50,50);
medb2.setAnimation("images (4).jpg_1");
var medb3 = createSprite(-3200,360,50,50);
medb3.setAnimation("images (4).jpg_1");
var medb4 = createSprite(-3200,360,50,50);
medb4.setAnimation("images (4).jpg_1");
var medb5 = createSprite(-3200,100,50,50);
medb5.setAnimation("images (4).jpg_1");
var medb6 = createSprite(-3200,100,50,50);
medb6.setAnimation("images (4).jpg_1");
var medm = createSprite(-900,200,40,40);
medm.setAnimation("download (8).jpg_1");
var wall7 = createSprite(-9000,200,0.1,400);
var gate6 = createSprite(28910,210,30,100);
//for room5
var b6 = createSprite(4000,200,40,40);
b6.setAnimation("Untitled.pngb6");
var wall8 = createSprite(-9000,30,40,40);
wall8.setAnimation("Untitled.png_wall6");
var labt1 = createSprite(-9000,50,30,30);
labt1.setAnimation("beaker-cartoon-science-chemistry-experiment-logo-laboratory-echipament-de-laborator-line-png-clipart-thumbnail.jpg_1");
var labt2 = createSprite(-9000,350,30,30);
labt2.setAnimation("download (9).jpg_1");
var among = createSprite(210,200,50,50);
among.setAnimation("crew red(idle left)");
function draw(){
  background("white");
  createEdgeSprites();
  if (keyWentDown(RIGHT_ARROW)){
    among.setAnimation("crew red(walk right)");
    among.velocityX = 6;
  }
  if (keyWentUp(RIGHT_ARROW)){
    among.setAnimation("crew red(idle left)");
    among.velocityX = 0;
  }
  if (keyWentDown(LEFT_ARROW)){
    among.setAnimation("crew red(walk left)");
    among.velocityX = -6;
  }
  if (keyWentUp(LEFT_ARROW)){
    among.setAnimation("crew red(idle left)");
    among.velocityX = 0;
  }
  if (keyWentDown(UP_ARROW)){
    among.setAnimation("crew red(walk left)");
    among.velocityY = -6;
  }
  if (keyWentUp(UP_ARROW)){
    among.setAnimation("crew red(idle left)");
    among.velocityY = 0;
  }
  if (keyWentDown(DOWN_ARROW)){
    among.setAnimation("crew red(walk left)");
    among.velocityY = 6;
  }
  if (keyWentUp(DOWN_ARROW)){
    among.setAnimation("crew red(idle left)");
    among.velocityY = 0;
  }
  if (keyWentDown("space")&&laptop.x==280){
    t1.x = 200;
  }
  if (keyWentUp("space")){
    t1.x = -800;                                                                                                                                                                                                                            
  }
  showMobileControls(true,true,true,false);
  //for room2
  if (among.isTouching(gate)){
    table1.x = -500;
    table2.x = -600;
    line1.x = 200;
    admin.x = 200;
    laptop.x = 500;
    wall1.x = -400;
    wall2.x = 9000;
    wall3.x = 600;
    gate.x = 700;
    wall4.x = 900;
    b2.x = 200;
    m4.x = 100;
    m5.x = 170;
    m6.x = 270;
    line2.x = 200;
    m7.x = 230;
    m8.x = 330;
    among.x = 60;
    line3.x = 5;
    gate2.x = 395;
  }
  if (among.isTouching(line3)){
    admin.x = -700;
    line2.x = -500;
    m4.x = -600;
    m5.x = -600;
    m6.x = -3800;
    m7.x = 80000;
    m8.x = 9000;
    line3.x = -800;
    b2.x = -9000;
    table1.x  = 90;
    table2.x = 280;
    wall1.x = 200;
    wall2.x = -25;
    wall3.x = 200;
    line1.x = 200;
    gate.x = 405;
    laptop.x = 280;
    among.x = 355;
    among.y = 115;
  }
  //for room3
  if (among.isTouching(gate2)){
    b3.x = 200;
    wall5.x = 195;
    offtable1.x = 90;
    admin.x = -5000;
    line1.x = -7000;
    line2.x = -70000;
    m7.x = 9000;
    m8.x = 9000;
    m5.x = -700;
    m6.x = -7000;
    line3.x = -5000;
    gate2.x = -8000;
    offtable2.x = 310;
    offtable3.x = 90;
    offtable4.x = 310;
    among.setCollider("circle",0,0,10);
    lecturetable1.x = 200;
    emergency.x = 300;
    dustbin.x = 30;
    among.x = 35;
    among.y = 270;
    gate3.x = -5;
    gate4.x = 400;
  }
  if (mousePressedOver(emergency)&&among.x<550){
    playSound("assets/category_alerts/retro_game_alert_3.mp3");
  }
  if (mousePressedOver(dustbin)&&laptop.x==500&&point1.x==0){
    b4.x = 200;
    leaf1.x = 100;
    leaf2.x = 195;
    leaf3.x = 280;
    leaf4.x = 330;
    leaf5.x = 60;
  }
  if (mousePressedOver(leaf1)){
    leaf1.x = -600;
  }
  if (mousePressedOver(leaf2)){
    leaf2.x = -600;
  }
  if (mousePressedOver(leaf3)){
    leaf3.x = -600;
  }
  if (mousePressedOver(leaf4)){
    leaf4.x = -600;
  }
  if (mousePressedOver(leaf5)){
    leaf5.x = -600;
    dustbin.x = 29;
  }
  if (leaf1.x==-600&&leaf2.x==-600&&leaf3.x==-600&&leaf4.x==-600&&leaf5.x==-600&&b3.x==200){
    b4.x = -9000;
  }
  if (among.isTouching(gate3)){
    b3.x = -800;
    lecturetable1.x = -800;
    wall5.x = -600;
    dustbin.x = 9000;
    offtable1.x = 9000;
    offtable2.x  = -1000;
    offtable3.x = 88986;
    offtable4.x = 9400;
    emergency.x = -600;
    line1.x = 200;
    admin.x = 200;
    laptop.x = 500;
    wall1.x = -400;
    wall2.x = 9000;
    wall3.x = 600;
    gate.x = 700;
    wall4.x = 900;
    b2.x = 200;
    m4.x = 100;
    m5.x = 170;
    m6.x = 270;
    line2.x = 200;
    m7.x = 230;
    m8.x = 330;
    among.x = 330;
    line3.x = 5;
    gate2.x = 395;
    point1.x = 1;
   among.setCollider("circle",0,0,25);
  }
  //for room4
  if (among.isTouching(gate4)){
    b5.x = 200;
    b3.x = -800;
    lecturetable1.x = -800;
    wall5.x = -6600;
    dustbin.x = 9000;
    offtable1.x = 9000;
    offtable2.x  = -1000;
    offtable3.x = 88986;
    offtable4.x = 9400;
    emergency.x = -600;
    line1.x = 2800;
    admin.x = -700;
    laptop.x = 500;
    wall1.x = -400;
    wall2.x = 90009;
    wall3.x = 60009;
    gate.x = 70090;
    wall4.x = -8900;
    b2.x = 2090;
    m4.x = -7100;
    m5.x = -8170;
    m6.x = -90270;
    line2.x = -8200;
    m7.x = 2730;
    m8.x = 3380;
    among.x = 20;
    line3.x = -775;
    gate2.x = -88395;
    medb1.x = 90;
    medb2.x = 90;
    medb3.x = 220;
    medb4.x = 340;
    medb5.x = 340;
    medb6.x = 220;
    gate3.x = -9000;
    among.setCollider("circle",0,0,10);
    among.debug = true;
    hm1.x = 50;
    wall6.x = 200;
    hm2.x = 150;
    hm3.x = 250;
    hm4.x = 350;
    hm5.x = 50;
    hm6.x = 150;
    hm7.x = 250;
    hm8.x = 350;
    medm.x = 280;
    gate6.x = 395;
    wall7.x = 375;
  }
  //for room5
  if (among.isTouching(gate6)){
    b6.x = 200;
    b5.x = 5000;
    hm1.x = -600;
    hm2.x = 5000;
    hm3.x = 8000;
    hm4.x = -700;
    hm5.x = 7000;
    hm6.x = -8000;
    hm7.x = 7001;
    hm8.x = 7000;
    medm.x = -7000;
    gate6.x = 7777;
    medb1.x = 5000;
    medb2.x = -8000;
    medb3.x = -9000;
    medb4.x = 9000;
    medb5.x = -7000;
    medb6.x = 80009;
    labt1.x = 130;
    wall8.x = 200;
    labt2.x = 110;
    among.setCollider("circle",0,0,-5);
  }
  //for room1
  among.collide(table1);
  among.collide(table2);
  among.collide(wall1);
  among.collide(wall2);
  among.collide(wall3);
  among.collide(line1);
  //for room2
  among.collide(admin);
  among.collide(m5);
  among.collide(m6);
  among.collide(topEdge);
  among.collide(bottomEdge);
  among.collide(rightEdge);
  among.collide(leftEdge);
  //for room3
  among.collide(offtable1);
  among.collide(offtable2);
  among.collide(offtable3);
  among.collide(offtable4);
  //for room4
  among.collide(medb1);
  among.collide(medb2);
  among.collide(medb3);
  among.collide(medb5);
  among.collide(medb6);
  among.collide(medb4);
  among.collide(hm1);
  among.collide(hm2);
  among.collide(hm3);
  among.collide(hm4);
  among.collide(hm5);
  among.collide(hm6);
  among.collide(hm7);
  among.collide(hm8);
  among.collide(wall7);
  //for room5
  among.collide(labt1);
  among.collide(labt2);
  drawSprites()
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
