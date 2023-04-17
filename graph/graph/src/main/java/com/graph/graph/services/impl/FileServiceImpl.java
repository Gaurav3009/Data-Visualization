package com.graph.graph.services.impl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.graph.graph.charts.AreaChart;
import com.graph.graph.charts.BarChart;
import com.graph.graph.charts.BubbleChart;
import com.graph.graph.charts.Histogram;
import com.graph.graph.charts.LineChart;
import com.graph.graph.charts.PieChart;
import com.graph.graph.charts.ScatterPlot;
import com.graph.graph.services.FileServices;


@Service
public class FileServiceImpl implements FileServices {

	@Override
	public String uploadImage(String path, MultipartFile file, String graphName) throws IOException {
		
		//File name
		String name = file.getOriginalFilename();
		//Fullpath
		
		String randomID = UUID.randomUUID().toString();
		String fileName1 = randomID.concat(name.substring(name.lastIndexOf('.')));
//		System.out.println();
		String filePath = String.format("D:\\_MAJOR_PROJECTS_\\Data Visualization JAVA project\\graph\\graph\\csvs\\%s", fileName1);
		// Create Folder if not created
		File f = new File(path);
		if(!f.exists()) {
			f.mkdir();
		}
		// File copy
		try {
			Files.copy(file.getInputStream(), Paths.get(filePath), StandardCopyOption.REPLACE_EXISTING);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		String imageName = randomID + ".jpeg";
		if("histogram".equals(graphName)) {
			new Histogram().generateGraph(filePath, imageName);
		} 
		else if("area".equals(graphName)) {
			new AreaChart().generateGraph(filePath, imageName);
		} else if("bubble".equals(graphName)) {
			new BubbleChart().generateGraph(filePath, imageName);
		} else if("scatter".equals(graphName)) {
			new ScatterPlot().generateGraph(filePath, imageName);
		} else if ("pie".equals(graphName)) {
			new PieChart().generateGraph(filePath, imageName);
		} else if("line".equals(graphName)) {
			new LineChart().generateGraph(filePath, imageName);
		} else if("bar".equals(graphName)) {
			new BarChart().generateGraph(filePath, imageName);
		}
		return imageName;
	}

	@Override
	public InputStream getResource(String path, String imageName) {
		String fullPath = String.format("D:\\_MAJOR_PROJECTS_\\Data Visualization JAVA project\\graph\\graph\\image\\%s", imageName);
		InputStream is;
		try {
			is = new FileInputStream(fullPath);
			return is;
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		
	}

}

