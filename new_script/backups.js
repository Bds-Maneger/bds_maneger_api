module.exports.World_BAckup = () => {
    const bds = require('../index')
    const path = require("path")
    const java_pro = require("properties-to-json")
    const fs = require("fs")
    var AdmZip = require("adm-zip");

    var today = bds.date()
    const name = path.join(bds.backup_folder ,`bds_backup_World_${today}.zip`)
    if (bds.platform === "bedrock"){
        var dir_zip = path.join(bds_dir_bedrock, "worlds") //`${require("../index").}/worlds/`
    } else {
        const world_name = JSON.parse(java_pro(fs.readFileSync(path.join(bds.bds_dir_java, "server.properties"), "utf-8").replaceAll("-", "_"))).level_name
        var dir_zip = path.join(bds.bds_dir_java, world_name) //`${require("../index").bds_dir_bedrock}/${world_name}/`
    }
    /**
     * Before we can start it is good for the server not to have a Corrupted Backup
     * this is only necessary once after the server has started manually
    */
    if (bds.bds_detect()){bds.stop()}
    var zip = new AdmZip();
    zip.addLocalFolder(dir_zip);
    zip.addZipComment(`Backup zip file in ${today}. \nBackup made to ${process.platform}, Free and open content for all\n\nSirherobrine23© By Bds Maneger.`);
    var zipEntries = zip.getEntries();
    zipEntries.forEach(function (zipEntry) {
        console.log(zipEntry.entryName.toString());
    });
    zip.writeZip(name);
    return {
        path: name,
        world_path: dir_zip
    }
};

module.exports.Drive_backup = () => {
    const bds = require('../index')
    const path = require("path")
    const java_pro = require("properties-to-json")
    const fs = require("fs")
    var AdmZip = require("adm-zip");

    var today = bds.date()
    const name = path.join(bds.backup_folder ,`bds_backup_World_${today}.zip`)
    if (bds.platform === "bedrock"){
        var dir_zip = path.join(bds.bds_dir_bedrock, "worlds") //`${require("../index").}/worlds/`
    } else {
        const world_name = JSON.parse(java_pro(fs.readFileSync(path.join(bds.bds_dir_java, "server.properties"), "utf-8").replaceAll("-", "_"))).level_name
        var dir_zip = path.join(bds.bds_dir_java, world_name) //`${require("../index").bds_dir_bedrock}/${world_name}/`
    }
    /**
     * Before we can start it is good for the server not to have a Corrupted Backup
     * this is only necessary once after the server has started manually
    */
    if (bds.bds_detect()){bds.stop()}
    global.status_b = true
    var zip = new AdmZip();
    zip.addLocalFolder(dir_zip);
    zip.addZipComment(`Backup zip file in ${today}. \nBackup made to ${process.platform}, Free and open content for all\n\nSirherobrine23© By Bds Maneger.`);
    var zipEntries = zip.getEntries();
    var totalfiles = zipEntries.length
    zipEntries.forEach(function(zipEntry) {
        totalfiles--
        console.log(totalfiles)
        if (totalfiles === 0){
            status_b = false
        }   
    });
    zip.writeZip(name);
    let es = 0;
    for(es == "-0";es++;){
        if (!(status_b)) break
    }
    delete(status_b)
    const js_ = {
        "file_path": name,
        "file_name": `bds_backup_World_${today}.zip`,
        "id": undefined
    }
    return js_
};
